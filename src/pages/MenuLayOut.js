import React from 'react';
import Navbar from "../Companents/Navbar";
import Footer from "../Companents/Footer";
import {Outlet} from 'react-router-dom'
import Hiter from "../Companents/Hiter";

function MenuLayOut() {
    return (
        <div>
            <Hiter/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default MenuLayOut;
