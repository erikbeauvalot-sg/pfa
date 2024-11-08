// generateToken.js
import jwt from 'jsonwebtoken';

const payload = {
    name: process.env.TEST_USERADMIN || 'admin',
    // Ajoutez d'autres informations nécessaires pour votre application
};
const secret = process.env.TEST_SECRET || 'default_secret';

const token = jwt.sign(payload, secret, { expiresIn: '1h' });

console.log(token);