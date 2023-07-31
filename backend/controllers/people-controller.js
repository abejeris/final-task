const Person = require('../model/Person');

const getAllPeople = async (req, res) => {
	let people;
	try {
		people = await Person.find();
	} catch (err) {
		console.log(err);
	}

	if (!people) {
		return res.status(404).json({ message: 'No people found' });
	}
	return res.status(200).json({ people });
};

const getById = async (req, res) => {
	const id = req.params.id;
	let person;
	try {
		person = await Person.findById(id);
	} catch (err) {
		console.log(err);
	}
	if (!person) {
		return res.status(404).json({ message: 'No such person' });
	}
	return res.status(200).json({ person });
};

const addPerson = async (req, res) => {
	const { name, surname, email, age } = req.body;
	let person;
	try {
		person = new Person({
			name,
			surname,
			email,
			age,
		});
		await person.save();
	} catch (err) {
		console.log(err);
	}

	if (!person) {
		return res.status(500).json({ message: 'Unable to add:(' });
	}

	return res.status(201).json({ person });
};

const updatePerson = async (req, res) => {
	// put version below - not so good to use if you need to update some fields only //////////
	// const id = req.params.id;
	// const { name, surname, email, age } = req.body;
	// let person;
	// try {
	// 	person = await Person.findByIdAndUpdate(id, {
	// 		name,
	// 		surname,
	// 		email,
	// 		age,
	// 	});

	// 	person = await person.save();
	// } catch (err) {
	// 	console.log(err);
	// }
	// if (!person) {
	// 	return res.status(500).json({ message: 'Unable to update by this ID' });
	// }
	// return res.status(201).json({ person });

	//patch version below - better///////////

	const { name, surname, email, age } = req.body;
	const personId = req.params.id;

	try {
		// Find the person by ID
		const person = await Person.findById(personId);

		if (!person) {
			return res.status(404).json({ message: 'Person not found.' });
		}

		// Update the person's information
		if (name) person.name = name;
		if (surname) person.surname = surname;
		if (email) person.email = email;
		if (age) person.age = age;

		// Save the updated person
		await person.save();

		return res.json(person);
	} catch (error) {
		return res.status(500).json({ message: 'Error updating person.', error });
	}
};

const deletePerson = async (req, res) => {
	const id = req.params.id;
	let person;
	try {
		person = await Person.findByIdAndRemove(id);
	} catch (err) {
		console.log(err);
	}
	if (!person) {
		res.status(404).json({ message: 'Unable to delete by this ID' });
	}
	return res.status(200).json({
		message: `${person.surname} was successfully deleted from database`,
	});
};

exports.getAllPeople = getAllPeople;
exports.addPerson = addPerson;
exports.getById = getById;
exports.updatePerson = updatePerson;
exports.deletePerson = deletePerson;
