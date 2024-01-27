import { Link } from "@remix-run/react";
export default function CustomNotFoundPage() {
	return (
		<div>
			<h1>404 - Page Not Found</h1>
			<p>Sorry, the page you are looking for does not exist.</p>
			<Link to="/">Go Home</Link>
		</div>
	);
}
