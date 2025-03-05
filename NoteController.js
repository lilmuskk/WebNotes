import Note from "../TugasTCC/NoteModel.js";

// GET All Notes
async function getNotes(req, res) {
  try {
    const response = await Note.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// GET Note by ID
async function getNoteById(req, res) {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// CREATE Note
async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    await Note.create({ title, content });
    res.status(201).json({ msg: "Note Created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// UPDATE Note
async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });

    await Note.update({ title, content }, { where: { id: req.params.id } });
    res.status(200).json({ msg: "Note Updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// DELETE Note
async function deleteNote(req, res) {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });

    await Note.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "Note Deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { getNotes, getNoteById, createNote, updateNote, deleteNote };
