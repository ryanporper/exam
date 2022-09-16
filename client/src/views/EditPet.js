import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { getPetById, updatePetById } from "../services/internalApiService";

export const EditPet = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [desc, setDesc] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    getPetById(id)
      .then((data) => {
        setPetName(data.petName);
        setPetType(data.petType);
        setDesc(data.desc);
        setSkill1(data.skill1);
        setSkill2(data.skill2);
        setSkill3(data.skill3);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditPetSubmit = (event) => {
    event.preventDefault();

    const editedPet = {
      petName,
      petType,
      desc,
      skill1,
      skill2,
      skill3,
    };

    updatePetById(id, editedPet)
      .then((updatedPet) => {
        console.log("updatedPet:", updatedPet);
        navigate(`/pets`);
      })
      .catch((error) => {
        console.log(error);
        setErrors(error?.response?.data?.errors);
      });
  };

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
      <div className="p-4 rounded mx-auto shadow">
        <form onSubmit={(e) => handleEditPetSubmit(e)}>
          <div className="form-group">
            <label className="h6">Pet Name:</label>
            {errors?.petName && (
              <span style={{ color: "red" }}> {errors?.petName?.message}</span>
            )}
            <input
              onChange={(event) => {
                setPetName(event.target.value);
              }}
              type="text"
              className="form-control"
              value={petName}
            />
          </div>
          <div className="form-group">
            <label className="h6">Pet Type:</label>
            {errors?.petType && (
              <span style={{ color: "red" }}> {errors?.petType?.message}</span>
            )}
            <input
              onChange={(event) => {
                setPetType(event.target.value);
              }}
              type="text"
              className="form-control"
              value={petType}
            />
          </div>
          <div className="form-group">
            <label className="h6">Description:</label>
            {errors?.desc && (
              <span style={{ color: "red" }}> {errors?.desc?.message}</span>
            )}
            <input
              onChange={(event) => {
                setDesc(event.target.value);
              }}
              type="text"
              className="form-control"
              value={desc}
            />
          </div>
          <div className="form-group">
            <label className="h6">Skill 1:</label>
            <input
              onChange={(event) => {
                setSkill1(event.target.value);
              }}
              type="text"
              className="form-control"
              value={skill1}
            />
          </div>
          <div className="form-group">
            <label className="h6">Skill 2:</label>
            <input
              onChange={(event) => {
                setSkill2(event.target.value);
              }}
              type="text"
              className="form-control"
              value={skill2}
            />
          </div>
          <div className="form-group">
            <label className="h6">Skill 3:</label>
            <input
              onChange={(event) => {
                setSkill3(event.target.value);
              }}
              type="text"
              className="form-control"
              value={skill3}
            />
          </div>

          <Link to="/pets" className="btn btn-outline-danger m-1">
            Cancel
          </Link>

          <button className="btn btn-outline-success">Edit Pet</button>
        </form>
      </div>
    </div>
  );
};

export default EditPet;
