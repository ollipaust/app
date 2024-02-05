import Spline from "@splinetool/react-spline";

function MainBackground({ id, className }: { id: string; className: string }) {
	return (
		<div
			id={id}
			className={className}
		>
			<Spline scene="https://prod.spline.design/9hjaj4pXIDxv-CIh/scene.splinecode" />
		</div>
	);
}

export default MainBackground;
