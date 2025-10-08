import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;