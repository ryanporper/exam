import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getAllPets,
} from "../services/internalApiService";

export const AllPets = (props) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getAllPets()
      .then((data) => {
        console.log(data);
        setPets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-50 mx-auto text-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Pet Shelter</h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/pets/new"
            className="btn btn-sm btn-outline-success mx-1"
          >
            Add a pet
          </Link>
        </div>
      </nav>
      <h2>Pets looking for a home:</h2>

      {pets.map((pet) => {
        const { _id, petName, petType } = pet;

        return (
          <table className="table table-striped">
            <thead>
              <tr>
                <th><h3>Name</h3></th>
                <th><h3>Type</h3></th>
                <th><h3>Actions</h3></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to={`/pets/${_id}`}>
                    <h4>{petName}</h4>
                  </Link>
                </td>
                <td>
                  <h4>{petType}</h4>             
                </td>
                <td>
                  <Link
                    to={`/pets/${_id}`}
                    className="btn btn-primary mx-1"
                  >
                    Details
                  </Link>
                  <Link
                    to={`/pets/${_id}/edit`}
                    className="btn btn-warning mx-1"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default AllPets;

/*

<div className="w-50 mx-auto text-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
          <h1 className="navbar-brand mb-0">Favorite Authors</h1>
          <div className="navbar-nav justify-content-between">
            <Link
              to="/authors/new"
              className="btn btn-sm btn-outline-success mx-1"
            >
              Add An Author
            </Link>
          </div>
        </nav>
    
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ name }</td>
              <td> 
              <button
                  onClick={(e) => {
                    handleDeleteClick(_id);
                  }}
                  className="btn btn-sm btn-outline-danger mx-1"
                >
                  Delete
                </button>

                <Link
                  to={`/authors/${_id}/edit`}
                  className="btn btn-sm btn-outline-warning mx-1"
                >
                  Edit
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

*/

/*

<div className="w-50 mx-auto text-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Favorite Authors</h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/authors/new"
            className="btn btn-sm btn-outline-success mx-1"
          >
            Add An Author
          </Link>
        </div>
        </nav>
        <h2>All Authors:</h2>

        {authors.map((author) => {
          const { _id, name } =
            author;

          return (
            <div key={_id} className="shadow mb-4 rounded border p-4">
              <Link to={`/authors/${_id}`}>
                <h4>{name}</h4>
              </Link>
              <div className="mt-2">
                <button
                  onClick={(e) => {
                    handleDeleteClick(_id);
                  }}
                  className="btn btn-sm btn-outline-danger mx-1"
                >
                  Delete
                </button>

                <Link
                  to={`/authors/${_id}/edit`}
                  className="btn btn-sm btn-outline-warning mx-1"
                >
                  Edit
                </Link>
              </div>
            </div>
          );
        })}
      </div>

*/
