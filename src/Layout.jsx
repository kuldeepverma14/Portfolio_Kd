import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
function Layout() {
    const location = useLocation()
    console.log(location.hash, "sdfg")

    return (
        <div className="flex flex-row ">
            <div className="shrink w-[15%]"></div>
            <div className="flex-1 bg-red-400">
                {location.pathname === "/" && <div className="">
                    <Header />
                </div>}
                <div className="">
                    <Outlet />
                </div>
            </div>
            <div className="shrink w-[15%]"></div>
        </div>
    )
}

export default Layout