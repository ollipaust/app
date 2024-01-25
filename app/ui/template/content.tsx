import React from "react";

interface ContentProps {
	children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
	return (
		<>
			<main
				id="MainContent"
				className="main-content"
			>
				{children}
			</main>
		</>
	);
};

export default Content;
