import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

import Footer from './Footer';
function Layout() {

    return (
        <div id="wrapper bg-white" >
       
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <NavBar />
                    <Outlet />
                   
                </div >
                <Footer />
            </div >
            
        </div>

    )
}
export default Layout;