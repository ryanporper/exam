import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { deletePetById, getPetById } from "../services/internalApiService";

export const ViewPet = (props) => {
  const [pet, setPet] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPetById(id)
      .then((data) => {
        console.log(data);
        setPet(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (pet === null) {
    return null;
  }

  const handleDeleteClick = () => {
    deletePetById(id)
      .then((deletedPet) => {
        navigate("/pets");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { petName, petType, desc, skill1, skill2, skill3 } = pet;

  return (
    <div className="mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Pet Shelter</h1>
        <div className="navbar-nav justify-content-between">
          <Link to="/pets" className="btn btn-sm btn-outline-primary mx-1">
            Home
          </Link>
        </div>
      </nav>
      <button
        onClick={(e) => {
          handleDeleteClick();
        }}
        className="btn btn-danger mb-2"
      >
        Adopt {petName}
      </button>
      <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
        <h4 className="mb-3">Name: {petName}</h4>
        <h4 className="mb-3">Type: {petType}</h4>
        <h4 className="mb-3">Description: {desc}</h4>
        <h4 className="mb-3">Skills: </h4>
        <ul className="list-group">
          {skill1 && (
            <li className="list-group-item">
              <h4>{skill1}</h4>
            </li>
          )}
          {skill2 && (
            <li className="list-group-item">
              <h4>{skill2}</h4>
            </li>
          )}
          {skill3 && (
            <li className="list-group-item">
              <h4>{skill3}</h4>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ViewPet;
