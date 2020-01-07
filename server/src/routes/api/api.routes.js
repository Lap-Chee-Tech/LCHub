import { Router } from 'express';
import  { getUser, addUser }  from './../../controllers/apiController.controller' 
import { authenticate, generateToken, respondToken } from './../../controllers/authController.controller';
import { ensureToken, verifyToken } from './../../config/jwt';
import bodyParser from 'body-parser';
import { add } from 'winston';

const router = Router();

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', (req, res) => {
    res.status(200).json({ message: 'hey!' });
});

router.get('/find/:uid', getUser);
router.post('/add/', urlEncodedParser, ensureToken, verifyToken, addUser);
router.post('/auth/', urlEncodedParser, authenticate, generateToken, respondToken);

export default router;