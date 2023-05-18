import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';

function ContentRowTop(){
    return(
        <>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-center mb-4">
					<h1 className="h3 mt-4 mb-2 fs-6 mb-0 text-gray-800">Dashboard Fufu</h1>
				</div>
			
				{/*<!-- Content Row Movies-->*/}
				<ContentRowMovies />
				{/*<!-- End movies in Data Base -->*/}
				

				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className="row">
					{/*<!-- Last Movie in DB -->*/}
					<LastMovieInDb />
					{/*<!-- End content row last movie in Data Base -->*/}

					{/*<!-- Genres in DB -->*/}
					<GenresInDb />

					{/*<!--End Genres In Db-->*/}		
				</div>
			</div>
			{/*<!--End Content Row Top-->*/}
        </>
    )

}
export default ContentRowTop;