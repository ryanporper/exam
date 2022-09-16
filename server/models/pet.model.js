const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      required: [true, '{PATH} is required.'],
      minlength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
    }, 
    petType: {
      type: String,
      required: [true, '{PATH} is required.'],
      minlength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
    },
    desc: {
      type: String,
      required: [true, '{PATH} is required.'],
      minlength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
    },    
    skill1: {
      type: String,
      required: [false],
    }, 
    skill2: {
      type: String,
      required: [false],
    }, 
    skill3: {
      type: String,
      required: [false],
    }, 
  },
  { timestamps: true } 
);

const Pet = mongoose.model('Pet', PetSchema);

module.exports = { Pet: Pet };