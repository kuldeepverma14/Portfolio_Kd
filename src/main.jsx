import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Home = () => <div>Home Component</div>;
const NotFound = () => <div>404 Not Found</div>;

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,
//         errorElement: <NotFound />,
//     },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    Test Text
    {/* <RouterProvider router={router} /> */}
  </>
);
