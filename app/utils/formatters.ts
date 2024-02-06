export function formatDate(date: Date | null): string {
	if (!date) return "";

	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();

	return `${day}.${month}.${year}`;
}

export function formatTime(date: Date | null): string {
	if (!date) return "";

	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	const seconds = date.getSeconds().toString().padStart(2, "0");

	return `${hours}:${minutes}:${seconds}`;
}

export function formatDateTime(date: Date | null): string {
	if (!date) return "";

	const dateString = formatDate(date);
	const timeString = formatTime(date);

	return `${dateString} – ${timeString}`;
}

export function formatElapsedTime(seconds: number): string {
	const hours = Math.floor(seconds / 3600)
		.toString()
		.padStart(2, "0");
	const minutes = Math.floor((seconds % 3600) / 60)
		.toString()
		.padStart(2, "0");
	const remainingSeconds = Math.floor(seconds % 60)
		.toString()
		.padStart(2, "0");

	return `${hours}:${minutes}:${remainingSeconds}`;
}
