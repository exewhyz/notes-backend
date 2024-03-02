const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/notebook");

mongoose.connection.on("connected", function () {
  console.log("Connected to MongoDB");
});

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: String,
});

const notes = mongoose.model("notes", noteSchema);

//Endpoint to create a new Note
app.post("/createNote", async function (req, res) {
  const { title, description, tags } = req.body;
  try {
    const newNote = new notes({
      title: title,
      description: description,
      tags: tags,
    });
    const saveNote = await newNote.save();
    res.status(201).json({ success: true, response: saveNote });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, response: error.message });
  }
});

//Endpoint to get all notes.
app.get("/getNotes", async function (req, res) {
  try {
    const notesResponse = await notes.find();
    if (notesResponse.length > 0) {
      res.status(200).json({ success: true, response: notesResponse });
    } else {
      res.status(404).json({ success: false, response: "No notes found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, response: error.message });
  }
});

//Endpoint to edit a note by id.
app.put("/updateNote/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const { title, description, tags } = req.body;
    let newNote = {};
    newNote.title = title;
    newNote.description = description;
    newNote.tags = tags;
    const getNote = await notes.findOneAndUpdate(
      { _id: id },
      { $set: newNote },
      { new: true }
    );
    res.status(200).json({ success: true, response: getNote });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, response: error.message });
  }
});

//Endpoint to delete a note by id.
app.delete("/delete/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const deletedNote = await notes.findOneAndDelete({ _id: id });
    res.status(200).json({ success: true, response: deletedNote });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, response: error.message });
  }
});

app.listen(5000, function () {
  console.log("Server is running on http://localhost:5000");
});
