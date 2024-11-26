import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Swal from 'sweetalert2';

const MainLayout = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <nav>
        <Navbar/>
      </nav>
      <div>
        <Outlet/>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default MainLayout
