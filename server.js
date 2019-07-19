const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(cors());

const baseUrl = `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/`;

app.get(`/all`, (req, res) => {
	axios
		.get(`${baseUrl}all.json`)
		.then(response => {
			res.send(response.data);
		})
		.catch(err => {
			res.send({ message: 'error' });
		});
});

app.get(`/`, (req, res) => {
	if (!req.query.id) res.send('No hero-id was found in the request');
	axios
		.get(`${baseUrl}id/${req.query.id}.json`)
		.then(response => {
			res.send(response.data);
		})
		.catch(err => {
			res.send({ message: 'error' });
		});
});

app.listen(5000, () => {
	console.log('app listening on port 5000');
});
