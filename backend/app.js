const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/person-routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/people', router);

mongoose.connect('mongodb://localhost:27017/registration', {
	useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log('error connecting', error));
db.once('open', () => console.log('connected to database'));

app.listen(8000, () => console.log(`server is on port`));
