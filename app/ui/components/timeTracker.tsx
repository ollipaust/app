// app/components/TimeTracker.tsx
import React from 'react';
import { useTimeTracking } from '~/utils/timeTrackingProvider.tsx'; // Adjust the import path as needed
import SessionsTable from './sessionsTable.tsx'; // Import the component for displaying sessions

export default function TimeTracker() {
  const { startTracking, stopTracking, isTracking } = useTimeTracking();

  return (
    <div className="flex flex-col items-center justify-center gap-16 mt-16">
      <div className='flex lg:flex-row flex-col justify-start items-center gap-6'>
        <button disabled={isTracking} className= {`px-4 py-2 text-white rounded-md disabled:opacity-50 ${isTracking ? 'bg-blue-500' : 'bg-green-500'}`} onClick={startTracking}>
          Start
        </button>
        <button disabled={!isTracking} className="px-4 py-2 bg-red-500 text-white rounded-md disabled:opacity-50" onClick={stopTracking}>
          Stop
        </button>
      </div>
      <SessionsTable /> {/* Display the sessions table */}
    </div>
  );
}
