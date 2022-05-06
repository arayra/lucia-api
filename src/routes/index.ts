import * as express from "express";
import * as controllers from "../controllers";
import * as multer from "multer";

const router = express.Router();
const upload = multer();

router.get("/words", controllers.getAllWords);
router.post("/words", upload.none(), controllers.newWord);

export default router;
