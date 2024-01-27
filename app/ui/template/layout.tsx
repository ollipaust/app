import Header from "~/ui/template/header";
import Content from "~/ui/template/content";
import Footer from "~/ui/template/footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Content>{children}</Content>
			<Footer />
		</div>
	);
};

export default Layout;
