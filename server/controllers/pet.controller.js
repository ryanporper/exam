const {
    createPet,
    getAllPets,
    getPetById,
    deletePetById,
    updatePetById,
  } = require('../services/pet.service');
  
  const handleCreatePet = async (req, res) => {
    console.log('controller: handleCreatePet req.body:', req.body);
  
    try {
      const pet = await createPet(req.body);
      return res.json(pet);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleGetAllPets = async (req, res) => {
    try {
      const pets = await getAllPets();
      return res.json(pets);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleGetPetById = async (req, res) => {
    try {
      const pet = await getPetById(req.params.id);
      return res.json(pet);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleDeletePetById = async (req, res) => {
    try {
      const pet = await deletePetById(req.params.id);
      return res.json(pet);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleUpdatePetById = async (req, res) => {
    try {
      const pet = await updatePetById(req.params.id, req.body);
      return res.json(pet);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  module.exports = {
    handleCreatePet,
    handleGetAllPets,
    handleGetPetById,
    handleDeletePetById,
    handleUpdatePetById,
  };