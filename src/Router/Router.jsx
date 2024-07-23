import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Error from "../Error";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />
    }
]);

export default Router;
