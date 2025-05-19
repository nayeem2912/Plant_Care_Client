import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <main className='min-h-[calc(100vh-320px)]'>
             <Outlet></Outlet>
           </main>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;