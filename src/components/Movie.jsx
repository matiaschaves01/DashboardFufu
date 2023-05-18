import { Component } from "react";
import MovieList from "./MovieList";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3007/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((movies) => {
        this.setState({ movies: movies.product });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <>
        {/*<!-- PRODUCTS LIST -->*/}
        <h1 className="h3 text-center mb-2 text-gray-800">
           Productos de la Base de Datos
        </h1>

        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Fecha Creacion</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Fecha Creacion</th>
                  </tr>
                </tfoot>
                <tbody>
				{this.state.movies.map((movie, index) => {
                  return <MovieList {...movie} key={index} />;
                })}
                  {/* <tr>
                    <td>01</td>
                    <td>Reto al destino</td>
                    <td>20</td>
                    <td>15</td>
                    <td>120</td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>La caida del halcon negro</td>
                    <td>10</td>
                    <td>18</td>
                    <td>240</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Movie;
