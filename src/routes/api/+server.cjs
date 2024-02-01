const express = require('express');
const app = express();
const port = 3000;

// Add CORS middleware
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use(express.json());

app.get('/api', (req, res) => {
	res.status(200).json({ message: 'Hello, World!' });
});

app.post('/api', (req, res) => {
	const body = req.body;
	// Process the body here
	console.log(body);
	// Return a success message
	res.status(200).json({ message: 'Success' });
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
