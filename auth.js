import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // name: 'Credentials',
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => { 
                const url = credentials?.has2fa ? `${BASE_URL}/rest-api/v1/auth/verify-otp` : `${BASE_URL}/rest-api/v1/auth/verify-user`;
                try {
                    const res = await axios.post(`https://migrainetracker.api.salonsyncs.com/api/user/login`, {
                        ...credentials,
                    });

                    return res.data;
                } catch (error) {
                    throw new Error(error.response.data.message);
                }
            },
        })
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            return session;
        },
    },
})