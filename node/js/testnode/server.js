// server.js written my HZL
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello from Node.js in Docker! HZL');
});

app.listen(3001, () => {
	console.log('Server is running on port 3001.');
});
