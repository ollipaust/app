import { Suspense, lazy } from 'react';

const SplineLazy = lazy(() => import('@splinetool/react-spline'));

function MainBackground({ id, className }: { id: string; className: string }) {
    return (
        <div id={id} className={className}>
            <Suspense fallback={<img src="/assets/main-bg.jpg" alt="Loading background..." />}>
                <SplineLazy scene="https://prod.spline.design/9hjaj4pXIDxv-CIh/scene.splinecode" />
            </Suspense>
        </div>
    );
}

export default MainBackground;
