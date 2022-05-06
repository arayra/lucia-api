import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;
const wordSchema = new Schema({
  createdAt: Date,
  updatedAt: Date,
  word: { type: String, unique: true },
  defeni: [String],
  ex: [String],
  vi: [String],
  speach: String,
});

const Word = mongoose.model("Word", wordSchema);

export default Word;
