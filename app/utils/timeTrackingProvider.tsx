import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface TrackingSession {
	id: string;
	startTime: Date | null;
	endTime: Date | null;
	elapsedTime: number;
	description: string;
}

interface TimeTrackingState {
	currentSession: TrackingSession;
	trackingSessions: TrackingSession[];
	isTracking: boolean;
	startTracking: () => void;
	stopTracking: () => void;
	setIsTracking: (isTracking: boolean) => void;
	stopTrackingSession: (sessionId: string) => void;
}

const defaultSession: TrackingSession = {
	id: "",
	startTime: null,
	endTime: null,
	elapsedTime: 0,
	description: "",
};

const defaultState: TimeTrackingState = {
	currentSession: defaultSession,
	trackingSessions: [],
	isTracking: false,
	startTracking: () => {},
	stopTracking: () => {},
	setIsTracking: () => {},
	stopTrackingSession: () => {},
};

const TimeTrackingContext = createContext<TimeTrackingState>(defaultState);

export const useTimeTracking = () => useContext(TimeTrackingContext);

export default function TimeTrackingProvider({ children }: { children: ReactNode }) {
	const [currentSession, setCurrentSession] = useState<TrackingSession>(defaultSession);
	const [trackingSessions, setTrackingSessions] = useState<TrackingSession[]>([]);
	const [isTracking, setIsTracking] = useState<boolean>(false);

	useEffect(() => {
		// Load sessions from localStorage on initial load
		const loadedSessions = localStorage.getItem("trackingSessions");
		if (loadedSessions) {
			setTrackingSessions(JSON.parse(loadedSessions));
		}
	}, []);

	useEffect(() => {
		// Save sessions to localStorage whenever trackingSessions changes
		localStorage.setItem("trackingSessions", JSON.stringify(trackingSessions));
	}, [trackingSessions]);

	const stopTrackingSession = (sessionId: string) => {
		// Find the session with the given ID
		const sessionIndex = trackingSessions.findIndex((session) => session.id === sessionId);

		if (sessionIndex !== -1) {
			// Remove the session from the trackingSessions array
			const updatedSessions = [...trackingSessions];
			updatedSessions.splice(sessionIndex, 1);
			setTrackingSessions(updatedSessions);

			// Save the updated sessions to localStorage
			localStorage.setItem("trackingSessions", JSON.stringify(updatedSessions));
		}
	};

	const startTracking = () => {
		const now = new Date();
		const newSession: TrackingSession = { ...defaultSession, id: uuidv4(), startTime: now };
		setCurrentSession(newSession);
		setIsTracking(true);
	};

	const stopTracking = () => {
		const endTime = new Date();
		let elapsedTime = (endTime.getTime() - (currentSession.startTime?.getTime() || endTime.getTime())) / 1000;

		// Ensure elapsedTime does not exceed 24 hours
		elapsedTime = Math.min(elapsedTime, 86400); // 86,400 seconds = 24 hours

		const updatedSession: TrackingSession = {
			...currentSession,
			endTime: endTime,
			elapsedTime: Math.round(elapsedTime),
		};

		setCurrentSession(updatedSession);
		setTrackingSessions((prevSessions) => [...prevSessions, updatedSession]);
		setIsTracking(false);
	};

	const updateSessionDescription = (sessionId: string, description: string) => {
		setTrackingSessions((currentSessions) => {
			const index = currentSessions.findIndex((session) => session.id === sessionId);
			if (index !== -1) {
				const updatedSessions = [...currentSessions];
				updatedSessions[index] = { ...updatedSessions[index], description };
				localStorage.setItem("trackingSessions", JSON.stringify(updatedSessions));
				return updatedSessions;
			}
			return currentSessions;
		});
	};

	const value = {
		currentSession,
		trackingSessions,
		isTracking,
		startTracking,
		stopTracking,
		setIsTracking,
		stopTrackingSession,
		updateSessionDescription,
	};

	return <TimeTrackingContext.Provider value={value}>{children}</TimeTrackingContext.Provider>;
}
