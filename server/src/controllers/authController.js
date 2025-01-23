const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const JWT_SECRET = "albinshiju"

const getProfile = async (req, res) => {
    console.log("getProfile()");
     
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const decoded = jwt.verify(token,JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { getProfile };
