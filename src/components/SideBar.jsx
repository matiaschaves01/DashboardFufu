import image from '../assets/images/logo-DH.png';
import { Route, Link, Routes } from "react-router-dom";
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import MovieList from './MovieList';
import ContentWrapper from './ContentWrapper';
import NotFound from './NotFound';
// import SearchMovies from './SearchMovies';



function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link to="/" className='sidebar-brand d-flex align-items-center justify-content-center' >
                    <div className="sidebar-brand-icon">
                        <h4>Artistica Fufu</h4>
                        {/* <img className="w-100" src={image} alt="Digital House"/> */}
                    </div>
                </Link>
                {/* <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a> */}

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                <Link to="/dash" className='nav-link' >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard Admin - Fufu</span>  
                </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/usuarios">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Usuarios</span></Link>
                    {/* <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a> */}
                </li>

                {/*<!-- Nav Item - Charts -->*/}
           
                <li className="nav-item">
                <Link className="nav-link" to="/lala">
                        <i className="fas fa-fw fa-chart-area"></i>
                        {/* <span>Buscar Movies</span> */}
                </Link>
                    {/* <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a> */}
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Routes>
                <Route path='/'  element={<ContentWrapper />} />
                <Route path='/usuarios'  element={<GenresInDb />} />
                <Route path='/dash'  element={<ContentWrapper />} />
                {/* <Route path='/lala'  element={<SearchMovies />} /> */}
                <Route path='*'  element={< NotFound />} />
            </Routes>
            
        </>
    )
}
export default SideBar;