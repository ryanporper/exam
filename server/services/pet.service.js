const { Pet } = require("../models/pet.model");

const createPet = async (data) => {
  console.log("service: createPet");

  const pet = await Pet.create(data);
  return pet;
};

const getAllPets = async () => {
  const pets = await Pet.find();
  return pets;
};

const getPetById = async (id) => {
  const pet = await Pet.findById(id);
  return pet;
};

const deletePetById = async (id) => {
  const pet = await Pet.findByIdAndDelete(id);
  return pet;
};

const updatePetById = async (id, data) => {
  const pet = await Pet.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

  return pet;
};

const createManyPets = async (documents) => {
  const createPromises = documents.map((document) => createPet(document));
  return Promise.allSettled(createPromises);
};

module.exports = {
  createPet,
  getAllPets,
  getPetById,
  deletePetById,
  updatePetById,
  createManyPets,
};
