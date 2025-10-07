import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Banner from '../Components/Banner/Banner';

const Root = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Root;