// import { Outlet } from 'react-router-dom'
// import Navbar from '../Components/Shared/Navbar/Navbar'
// import Footer from '../Components/Shared/Footer/Footer'
// import Navbars from '../Components/Shared/Navbar/Navbars'
import Navbar from '../Shared/Navbar/Navbar'
import Sidebar from '../Pages/Sidebar/Sidebar'
const Main = () => {
  return (
    <div>
      <Navbar />
      <Sidebar/>
      {/* <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Main