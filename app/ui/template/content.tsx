interface ContentProps {
	children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
	return (
		<>
			<main
				id="MainContent"
				className="flex-grow p-8 bg-slate-200"
			>
				<div className="container mx-auto bg-white shadow-lg rounded px-6 py-8">{children}</div>
			</main>
		</>
	);
};

export default Content;
