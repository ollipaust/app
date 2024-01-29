import { Link } from "@remix-run/react";
export default function CustomNotFoundPage() {
	return (
		<div>
			<header
				id="header"
				className="relative z-20"
			>
				<div className="container">
					<p className="mb-1 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">Oops..</p>
					<div className="flex items-center">
						<h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900">404 - Page not found!</h1>
					</div>
					<p className="mt-2 text-lg text-slate-700 dark:text-slate-400">Sorry, the page you are looking for does not exist.</p>
				</div>
			</header>
			<div className="py-10">
				<Link to="/">Go Home</Link>
			</div>
		</div>
	);
}
