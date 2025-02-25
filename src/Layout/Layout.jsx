import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <div className='flex'>
        <SideBar />

        <div className='md:w-[83%]'>
          <main className=''>
            <Outlet />  
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
