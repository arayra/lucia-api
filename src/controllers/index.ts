import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import Word from "../models";

const getAllWords = async (req: Request, res: Response) => {
  Word.find()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log(err);
      res.status(400).send("Bad Request");
    });
};

const newWord = (req: Request, res: Response) => {
  const word = new Word({
    createdAt: Date.now(),
    updatedAt: Date.now(),
    word: req.body.word,
    defeni: [, , , req.body.defeni],
    ex: [...req.body.ex],
    vi: [...req.body.vi],
    speach: req.body.speach,
  });
  word
    .save()
    .then(() => res.status(200).send("Saved!"))
    .catch((err: MongooseError) => {
      console.log(err);
      res.status(400).send("Bad Request");
    });
};

export { getAllWords, newWord };
