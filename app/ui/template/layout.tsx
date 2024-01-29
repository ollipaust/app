import Header from "~/ui/template/header.tsx";
import Content from "~/ui/template/content.tsx";
import { Footer } from "./footer.tsx";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen bg-slate-200">
			<Header />
			<Content>{children}</Content>
			<Footer />
		</div>
	);
};

export default Layout;
