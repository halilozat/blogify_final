import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  content: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;