const express = require('express');
const cors = require('cors');  // Import the cors package
const app = express();

const deviceRoutes = require('./routes/deviceRoutes');
const positionRoutes = require('./routes/positionRoutes'); // Include the new positionRoutes

// Enable CORS for all routes
app.use(cors({origin: '*'}));  // This will allow all origins to access your API {origin: 'http://localhost:4200' || 'http://angular.x2ff.com'}

// Middleware to parse JSON requests
app.use(express.json());

// Use device and position routes
app.use('/v1/api/bms', deviceRoutes);
app.use('/v1/api/bms', positionRoutes); // Add position routes here

// Set the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
