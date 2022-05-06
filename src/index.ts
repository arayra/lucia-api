import * as express from "express";
import * as cors from "cors";
import * as multer from "multer";
import * as mongoose from "mongoose";
import "dotenv/config";

const app = express();
const upload = multer();
const PORT = process.env.PORT;
const uri = process.env.MDB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("MDB Connected Successfully!"))
  .catch((err) => console.log(err));

app.use(cors());

app.get("/api/v1/words/");

app.listen(PORT, () => console.log(`Successfully listen on ${PORT}`));
