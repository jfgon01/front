import React from "react";
import HeaderComponent from "../components/ui/header";
import FooterComponent from "../components/ui/footer";
import { Outlet} from 'react-router-dom';

const MainLayout =()=>{

    return(

        <>
            {/* Header */}
            <HeaderComponent/>            
            {/* body */}
            <Outlet/>
            {/* footer */}
            <FooterComponent/>

        </>
    )
}
export default MainLayout;