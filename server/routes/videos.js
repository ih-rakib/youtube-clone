import express from "express";
import { verifyToken } from "../VerifyToken.js";
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from "../controllers/video.js";

const router = express.Router()

router.post('/', verifyToken, addVideo)
router.put('/', verifyToken, updateVideo)
router.delete('/', verifyToken, deleteVideo)
router.get('/find/:id', getVideo)
router.put('/views/:id', addView)
router.get('/trend', trend)
router.get('/random', random)
router.get('/sub',verifyToken, sub)
router.get('/tags', getByTag)
router.get('/search', search)

export default router;