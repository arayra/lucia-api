import * as express from "express";
import * as cors from "cors";
import * as multer from "multer";
import "dotenv/config";

const app = express();
const upload = multer();
const PORT = process.env.PORT;

app.use(cors());

app.get("/api/v1/words/");

app.listen(PORT, () => console.log(`Successfully listen on ${PORT}`));
