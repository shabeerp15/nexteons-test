import { auth } from "../../auth";
import React from "react";

async function DetailsPage() {
	const session = await auth();

    const userid = session?.user?.id

	const response = await fetch("https://migrainetracker.api.salonsyncs.com/api/emergency-kit/list", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${session?.jwt}`,
		},
		body: JSON.stringify({
			sortType: 0,
			sortOrder: 1,
			statusArray: [1],
			screenType: [0],
			emergencyKitIds: [],
			userIds: [userid],
			limit: 1,
			skip: 0,
			searchingText: "",
		}),
	});
	const emergencyKitLIst = await response.json();

    if(!emergencyKitLIst?.data?.length) return <div>No Data</div>

	return <div>
        {emergencyKitLIst?.data?.map((data) => (
            <h1>{data?.title}</h1>
        ))}
    </div>;
}

export default DetailsPage;
