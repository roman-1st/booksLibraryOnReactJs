import React        from "react";
import Header       from "./header/header";
import { Outlet }   from "react-router-dom";
import Footer       from "./Footer/footer";

let Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout