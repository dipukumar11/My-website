import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Component/Layout/NavBar/Nav';
import Footer from '../Component/Layout/Footer/Footer';

const Root = () => {
    return (
        <div >
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;