const pool = require('../config/db');

// Function to get device details for a user with header "AD"
const getDeviceDetailsByUserId = async (userId) => {
    const query = `
        SELECT DISTINCT ON (d.id)
            d.id, 
            d.uniqueid, 
            d.name, 
            (p.attributes::jsonb)->>'mode' AS mode
        FROM 
            tc_user_device ud
        JOIN 
            tc_devices d ON ud.deviceid = d.id
        LEFT JOIN 
            tc_positions p ON d.id = p.deviceid
        WHERE 
            ud.userid = $1 AND
            (p.attributes::jsonb)->>'header' = 'AD'
        ORDER BY 
            d.id, p.servertime DESC;


    `;
    try {
        const result = await pool.query(query, [userId]);
        return result.rows; // Return only devices
    } catch (err) {
        throw new Error('Database query failed: ' + err.message);
    }
};

module.exports = {
    getDeviceDetailsByUserId
};
