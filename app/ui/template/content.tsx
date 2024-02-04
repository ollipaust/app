function Content({ children }: { children: React.ReactNode }) {
	return (
		<>
			<main
				id="MainContent"
				className="flex-grow py-12 bg-ci-light-1/[.50]"
			>
				<div className="container lg:max-w-screen-xl mx-auto bg-white/[.30] lg:rounded-2xl px-8 pt-10 pb-20">{children}</div>
			</main>
		</>
	);
};

export default Content;
