function NewsletterForm({ headline }: { headline: string }) {
	return (
		<div className="mx-auto max-w-md">
			<strong className="block text-center text-xl font-bold text-white sm:text-3xl text-shadow">{headline}</strong>

			<form className="mt-6">
				<div className="relative max-w-lg">
					<label
						className="sr-only"
						htmlFor="email"
					>
						Email
					</label>

					<input
						className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
						id="email"
						type="email"
						placeholder="max@mustermann.de"
					/>

					<button className="absolute end-1 top-1/2 right-[2px] -translate-y-1/2 rounded-full bg-ci-accent-1 px-5 py-3 font-semibold text-ci-dark-1 hover:bg-ci-accent-2 transition">
						Abonnieren
					</button>
				</div>
			</form>
		</div>
	);
}
export default NewsletterForm;
