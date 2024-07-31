import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Error from "../Error";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Resume from "../Pages/Resume/Resume";
import Services from "../Pages/Services/Services";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Loading from "../Loading";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        loading:Loading,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/resume",
                element: <Resume />
            },
            // {
            //     path: "/services",
            //     element: <Services />
            // },
            // {
            //     path: "/portfolio",
            //     element: <Portfolio />
            // },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    }
]);

export default Router;
