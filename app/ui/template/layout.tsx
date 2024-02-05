import Header from "~/ui/template/header.tsx";
import Content from "~/ui/template/content.tsx";
import { Footer } from "./footer.tsx";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex flex-col min-h-screen max-w-screen-2xl mx-auto lg:shadow-lg lg:rounded-b-2xl">
			<Header />
			<Content>{children}</Content>
			<Footer />
		</div>
	);
}

export default Layout;
