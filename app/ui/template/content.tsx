function Content({ children }: { children: React.ReactNode }) {
	return (
		<>
			<main
				id="MainContent"
				className="flex-grow py-12 bg-ci-light-3/[.66]"
			>
				<div className="container lg:max-w-screen-xl mx-auto bg-white/[.33] drop-shadow-lg lg:rounded-2xl px-8 pt-10 pb-20 backdrop-opacity-10">{children}</div>
			</main>
		</>
	);
}

export default Content;
