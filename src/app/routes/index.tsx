import { FallbackComponent } from 'app/components/fallback-component/fallback-component';
import { ReactNode, Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Counter = lazy(() => import('app/pages/counter/counter'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Counter />,
    },
]);

export default function Routes(): ReactNode {
    return (
        <Suspense fallback={<FallbackComponent />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}
