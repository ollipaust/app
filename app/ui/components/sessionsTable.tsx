import React, { useState, useEffect } from "react";
import { useTimeTracking } from "~/utils/timeTrackingProvider.tsx";
import { formatDate, formatElapsedTime, formatTime } from "~/utils/formatters.ts";

export default function SessionsTable() {
	const { trackingSessions, stopTrackingSession } = useTimeTracking();
	const [descriptions, setDescriptions] = useState<{ [sessionId: string]: string }>({});

	useEffect(() => {
		const initialDescriptions = trackingSessions.reduce(
			(acc, session) => {
				acc[session.id] = "";
				return acc;
			},
			{} as { [sessionId: string]: string },
		);
		setDescriptions(initialDescriptions);
	}, [trackingSessions]);

	const handleDescriptionChange = (sessionId: string, description: string) => {
		setDescriptions({
			...descriptions,
			[sessionId]: description,
		});
	};

	const handleDeleteSession = (sessionId: string) => {
		stopTrackingSession(sessionId);
		const updatedDescriptions = { ...descriptions };
		delete updatedDescriptions[sessionId];
		setDescriptions(updatedDescriptions);
	};

	return (
		<table className="border-collapse w-full">
			<thead>
				<tr>
					<th className="w-1/5 p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Datum</th>
					<th className="w-1/5 p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Start</th>
					<th className="w-1/5 p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Stop</th>
					<th className="w-1/5 p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Gesamt Zeit</th>
					<th className="w-1/5 p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Beschreibung</th>
					<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Aktion</th>
				</tr>
			</thead>
			<tbody>
				{trackingSessions.map((session) => (
					<tr
						key={session.id}
						className="relative bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
					>
						<td className="w-1/5 p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
							{session.endTime ? formatDate(session.startTime) : "---"}
						</td>
						<td className="w-1/5 p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
							{session.startTime ? formatTime(session.startTime) : "---"}
						</td>
						<td className="w-1/5 p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
							{session.endTime ? formatTime(session.endTime) : "---"}
						</td>
						<td className="w-1/5 p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{formatElapsedTime(session.elapsedTime)}</td>
						<td className="w-1/5 p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
							<input
								type="text"
								value={session.description}
								onChange={(e) => handleDescriptionChange(session.id, e.target.value)}
								className="border-2 border-gray-300"
								placeholder="Einkaufen..."
							/>
						</td>
						<td className="p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
							<button
								className="text-red-500 hover:text-gray-600"
								onClick={() => handleDeleteSession(session.id)}
							>
								X
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
