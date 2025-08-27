const express = require('express'); // Import Express
const app = express(); // Create an Express application instance
const port = 3001; // Choose your port

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    const today = new Date();
    const content = `
        <h1>Server Side with Express!</h1>
        <p>${today.toISOString()}</p>
    `;
    res.send(content); // Express's res.send handles setting content-type and ending the response
});

// Start the server
app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}`);
    console.log("Press Ctrl+C to stop");
});