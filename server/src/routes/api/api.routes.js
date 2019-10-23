import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    // Performance test 
    res.status(200).json({ message: 'hey!' });
});

export default router;