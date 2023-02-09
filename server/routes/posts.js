import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("It's working")
} )

export default router;