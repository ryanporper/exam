import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createPet } from "../services/internalApiService";

export const NewPet = (props) => {
  const navigate = useNavigate();

  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [desc, setDesc] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");

  const [errors, setErrors] = useState(null);

  const handleNewPetSubmit = (event) => {
    event.preventDefault();

    const newPet = {
      petName,
      petType,
      desc,
      skill1,
      skill2,
      skill3,
    };

    createPet(newPet)
      .then((data) => {
        console.log("new pet data:", data);
        navigate("/pets");
      })
      .catch((error) => {
        console.log(error);
        setErrors(error?.response?.data?.errors);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Pet Shelter</h1>
        <div className="navbar-nav justify-content-between">
          <Link to="/pets" className="btn btn-sm btn-outline-primary mx-1">
            Home
          </Link>
        </div>
      </nav>
      <div className="p-4 rounded mx-auto shadow">
        <form onSubmit={(e) => handleNewPetSubmit(e)}>
          <div className="form-group">
            <label className="h6">Pet Name: </label>
            {errors?.petName && (
              <span style={{ color: "red" }}> {errors?.petName?.message}</span>
            )}
            <input
              onChange={(event) => {
                setPetName(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Pet Type: </label>
            {errors?.petType && (
              <span style={{ color: "red" }}> {errors?.petType?.message}</span>
            )}
            <input
              onChange={(event) => {
                setPetType(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Description: </label>
            {errors?.desc && (
              <span style={{ color: "red" }}> {errors?.desc?.message}</span>
            )}
            <input
              onChange={(event) => {
                setDesc(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Skill 1: </label>
            <input
              onChange={(event) => {
                setSkill1(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Skill 2: </label>
            <input
              onChange={(event) => {
                setSkill2(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Skill 3: </label>
            <input
              onChange={(event) => {
                setSkill3(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>

          <Link to="/pets" className="btn btn-outline-danger m-1">
            Cancel
          </Link>
          <button className="btn btn-outline-success">Add Pet</button>
        </form>
      </div>
    </div>
  );
};

export default NewPet;
