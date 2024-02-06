import type { MetaFunction } from "@remix-run/node";
import siteConfig from "~/utils/siteConfig.tsx"; 
import TimerTracker from '~/ui/components/timeTracker.tsx'; 

export const meta: MetaFunction = () => {
	return [
		{ title: `${siteConfig.siteName} - ${siteConfig.siteDescription}` }, 
		{ name: "description", content: siteConfig.siteDescription }
	];
};

export default function Index() {
  return (
    <div>
      <header id="header" className="relative border-b pb-4">
        <div className="container max-w-screen-xl">
          <p className="mb-1 text-xs uppercase leading-6 font-semibold text-ci-primary-2">Frontend UI & Engineering by Olli Paust</p>
          <div className="flex items-center">
            <h1 className="inline-block text-5xl font-extrabold text-ci-secondary-2">ZEA Time Tracker</h1>
          </div>
          <p className="text-lg text-white text-shadow">Eine simple JavaScript App, um die Zeit für Tasks im Auge zu behalten</p>
        </div>
      </header>

      <TimerTracker />
    </div>
  );
}
