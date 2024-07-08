"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log({ email, password });
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
          });
      
          if (result.ok) {
            router.push('/profile');
          } else {
            setError(result.error);
          }
	};

	return (
		<div className="max-w-xl m-auto mt-10 p-6 bg-white rounded-lg">
			<h1 className="text-3xl font-bold text-center mb-2">Hala ! Let's get started</h1>
			<p className="text-center text-gray-600 mb-6">Access a smoother and quicker checkout process by signing in</p>

			<form onSubmit={handleSubmit} className="shadow-md px-10 py-5">
                {error && <p className="text-red-500">{error}</p>}
				<div className="mb-4 ">
					<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						placeholder="Your email address please!"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
                        autoComplete="off"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
						Password
					</label>
					<div className="relative">
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							placeholder="What's your password?"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
						</button>
					</div>
					<a href="#" className="text-sm text-black hover:underline float-right mt-1 mb-4">
						Forget password
					</a>
				</div>

				<button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 mb-4">
					Login
				</button>
			</form>

			<div className="text-center mt-8">
				<p className="text-sm text-gray-600 mb-2">Don't have an account?</p>
				<button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">Create an Account</button>
			</div>
		</div>
	);
};

export default LoginPage;
