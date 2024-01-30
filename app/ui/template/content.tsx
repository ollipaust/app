interface ContentProps {
	children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
	return (
		<>
			<main
				id="MainContent"
				className="flex-grow py-12"
			>
				<div className="container mx-auto bg-white shadow-lg rounded px-8 pt-10 pb-20">
					{children}
				</div>
			</main>
		</>
	);
};

export default Content;
