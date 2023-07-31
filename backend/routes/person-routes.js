const express = require('express');

const router = express.Router();

// const Person = require('../model/Person');

const personController = require('../controllers/people-controller');
// getting all people
router.get('/', personController.getAllPeople);

// adding person to database
router.post('/', personController.addPerson);

//get person by id
router.get('/:id', personController.getById);

//edit person by id
router.patch('/:id', personController.updatePerson);

//delete person by id
router.delete('/:id', personController.deletePerson);

module.exports = router;
