// import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Movie from './Movie';
import Footer from './Footer';
import UserList from './UserList';

function ContentWrapper(){
    return (
        <>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    {/* <TopBar /> */}
                    <ContentRowTop />
                    <Movie />
                    <UserList/>
                    <Footer />
                </div>
            </div>    
        </>
    )
}

export default ContentWrapper;