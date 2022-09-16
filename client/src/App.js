import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import { AllPets } from "./views/Pets";
import { ViewPet } from "./views/ViewPet";
import { EditPet } from "./views/EditPet";
import { NewPet } from "./views/NewPet";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/pets" replace />} />
        <Route path="/pets" element={<AllPets />} />
        <Route path="/pets/:id/edit" element={<EditPet />} />
        <Route path="/pets/:id" element={<ViewPet />} />
        <Route path="/pets/new" element={<NewPet />} />
      </Routes>
    </div>
  );
}

export default App;
