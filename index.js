const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Function to read data from the JSON file
const readData = () => {
    const data = fs.readFileSync('./data/database.json');
    return JSON.parse(data);
};

// Function to write data to the JSON file
const writeData = (data) => {
    fs.writeFileSync('./data/database.json', JSON.stringify(data, null, 2));
};

// Initialize database if not exists
if (!fs.existsSync('./data/database.json')) {
    writeData({ rooms: [], bookings: [] });
}

// API endpoints here...

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
