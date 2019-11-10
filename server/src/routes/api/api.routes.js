import { Router } from 'express';
import  { getUser, addUser }  from './../../controllers/apiController.controller' 
import bodyParser from 'body-parser';
import { add } from 'winston';

const router = Router();

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', (req, res) => {
    res.status(200).json({ message: 'hey!' });
});

router.get('/find/:uid', getUser);
router.get('/add/:name/:uid', addUser);

export default router;