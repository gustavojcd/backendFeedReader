import express, { Router } from 'express';
import { listFeed, createdFeed } from '../controller/news';

const router = Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }));

router.route('/')
    .get(listFeed)
    .post(createdFeed)

export default router;