import Note from "../models/Note.js";

export const renderNoteForm = (req, res) => {
  res.render("notes/new-notes");
};

export const createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  await newNote.save();
  req.flash("success_msg", "Note added succesfully");
  res.redirect("/notes");
};
export const renderNotes = async (req, res) => {
  const notes = await Note.find();
  res.render("/notes/all-notes", { notes });
};

export const renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id);
  console.log(note);
  //La nota que veo en consola se la paso a la vista
  res.render("notes/edit-note", { note });
};

export const updateNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Note updated succesfully");
  res.redirect("/notes");
};

export const deleteNote = async (req, res) => {
  console.log(req.params.id); //Para poder ver el id
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Note deleted");
  res.redirect("/notes");
};
