import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
function Layout() {
    const location = useLocation()
    console.log(location.hash, "sdfg")

    return (
        <div className=" text-black ">
            <div className=" ">
                {location.pathname !== "/" &&
                    <Header />
                }
                <div className="flex bg-[#0D0D0D]">
                    {location.pathname !== "/" && <div className="shrink xsm:w-[10%] "></div>}
                    <div className={` ${location.pathname !== "/" ? "w-[100%] xsm:w-[80%]" : "w-[100%]"}  `}>
                        <Outlet />
                    </div>
                    {location.pathname !== "/" && <div className="shrink xsm:w-[10%] "></div>}
                </div>
            </div>
        </div>
    )
}

export default Layout