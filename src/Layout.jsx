import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
function Layout() {
    return (
        <div className="flex flex-row ">
            <div className="bg-red-500" >
                <Sidebar />
            </div>
            <div className="">
                <div>
                    <Header />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout