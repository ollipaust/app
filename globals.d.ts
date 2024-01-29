export {};
declare global {
	interface ProcessEnv {
		NODE_ENV: "development" | "production" | "test";
		SESSION_SECRET: string;
	}
	interface Process {
		env: ProcessEnv;
	}
	let process: Process;
}
