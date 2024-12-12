import express from 'express';
import { getSimilarTvs, getTrendingTv, getTvByCategory, getTvDetails, getTvTrailers } from '../controllers/tv.controller.js';


const router = express.Router();

router.get("/trending",getTrendingTv);
router.get("/:id/trailers",getTvTrailers)
router.get("/:id/details",getTvDetails)
router.get("/:id/similar",getSimilarTvs)
router.get("/:category",getTvByCategory)

export default router;