import { Component } from "react";
import Genre from "./Genre";
import { useEffect, useState } from 'react';


function GenresInDb() {

    let [lastMovie, setLastMovie] = useState()

    useEffect(()=>{

        fetch('http://localhost:3007/api/user/last')
        .then(res =>{
                return res.json()
        })
        .then(data =>{
            setLastMovie(data.user)
        })

    },[])
return(
<div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Usuario Creado</h5>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'http://localhost:3007/images/users/' + lastMovie?.image} alt=" Star Wars - Mandalorian "/>
                </div>
                <p>Nombre: {lastMovie?.name} {lastMovie?.lastname} </p>
                <p>Usuario: {lastMovie?.username}</p>
                <p>Email: {lastMovie?.email} </p>
                {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
            </div>
        </div>
</div>
    )
}

export default GenresInDb































// let genres = [
//   { genre: "Acción" },
//   { genre: "Animación" },
//   { genre: "Aventura" },
//   { genre: "Ciencia Ficción" },
//   { genre: "Comedia" },
//   { genre: "Documental" },
//   { genre: "Drama" },
//   { genre: "Fantasia" },
//   { genre: "Infantiles" },
//   { genre: "Musical" },
// ];

// class GenresInDb extends Component{
//   constructor() {
//     super();
//     this.state = { genresList: [] };
//   }
//   componentDidMount() {
//     fetch("http://localhost:3001/api/genres")
//       .then((respuesta) => {
//         return respuesta.json();
//       })
//       .then((genres) => {
//         this.setState({ genresList: genres.data });
//       })
//       .catch((error) => console.log(error));
//   }
//   onMouseOver(){
//     let h6 = document.querySelector('#genero')
//     h6.classList.toggle('bg-secondary')
//   }
//   render() {
//     return (
//       <>
//         {/*<!-- Categories in DB -->*/}
//         <div className="col-lg-6 mb-4">
//           <div className="card shadow mb-4">
//             <div className="card-header py-3">
//               <h6 onMouseOver={this.onMouseOver} className="m-0 font-weight-bold text-gray-800" id="genero">
//                 Genres in Data Base
//               </h6>
//             </div>
//             <div className="card-body">
//               <div className="row">
//                 {this.state.genresList.map((genre, index) => {
//                   return <Genre {...genre} key={index} />;
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
// export default GenresInDb;
