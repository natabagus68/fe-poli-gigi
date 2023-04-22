import { useState } from "react";
import HeaderLayout from "./header/header";
import SidebarLayout from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";
const LayoutAdmin = () => {
    const [sidebar, setSidebar] = useState(false);
    return (
        <>
            <div className="flex w-full ">
                <div className="w-full flex justify-center ">
                    <HeaderLayout setSidebar={setSidebar} sidebar={sidebar} />
                    <div className="w-full p-6   mt-11 py-11">
                        <Outlet />
                    </div>
                </div>
                <SidebarLayout showhide={sidebar} setSidebar={setSidebar} />
            </div>
        </>
    );
};

export default LayoutAdmin;
