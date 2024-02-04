interface SiteConfig {
	siteName: string;
	siteYear: number;
	siteDescription: string;
	author: string;
	keywords: string[];
	siteUrl: string;
	homeUrl: string;
	ogImageUrl: string;
	socialMedia: {
		twitterHandle: string;
		facebookPage: string;
		instagramHandle: string;
		linkedInPage: string;
	};
	googleAnalyticsId: string;
	themeColor: string;
	backgroundColor: string;
}

const siteConfig: SiteConfig = {
	siteName: "ZEP",
	siteYear: new Date().getFullYear(),
	siteDescription: "This is an awesome site about awesome things.",
	author: "Olli Paust",
	keywords: ["awesome", "site", "technology", "blog", "tips"],
	siteUrl: "https://app.ollipaust.dev/",
	homeUrl: "/",
	ogImageUrl: "https://www.myawesomesite.com",
	socialMedia: {
		twitterHandle: "@yourtwitter",
		facebookPage: "https://www.facebook.com/yourfacebookpage",
		instagramHandle: "@yourinstagram",
		linkedInPage: "https://www.linkedin.com/in/yourprofile/",
	},
	googleAnalyticsId: "UA-XXXXX-Y",
	themeColor: "#ffffff",
	backgroundColor: "#ffffff",
};

export default siteConfig;
