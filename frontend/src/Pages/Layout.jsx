import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout