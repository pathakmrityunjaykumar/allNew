const { fetchLatestPositionByDeviceId } = require('../models/positionModel');

// Controller function to get the most recent position for a device
async function getLatestPositionByDeviceId(req, res) {
    const { deviceid } = req.params;
    try {
        const position = await fetchLatestPositionByDeviceId(deviceid);
        if (position) {
            res.json(position);
        } else {
            res.status(404).json({ error: 'No position data found for the given device ID' });
        }
    } catch (error) {
        console.error('Error fetching positions:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getLatestPositionByDeviceId };
