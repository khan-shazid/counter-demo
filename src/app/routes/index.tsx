import { ReactNode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div style={{ color: 'white' }}>Base Page</div>,
    },
]);

export default function Routes(): ReactNode {
    return <RouterProvider router={router} />;
}
