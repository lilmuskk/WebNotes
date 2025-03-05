import express from "express";
import {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../TugasTCC/NoteController.js";

const router = express.Router();

router.get("/notes", getNotes); // Ambil semua catatan
router.get("/notes/:id", getNoteById); // Ambil satu catatan
router.post("/notes", createNote); // Buat catatan baru
router.put("/notes/:id", updateNote); // Update catatan
router.delete("/notes/:id", deleteNote); // Hapus catatan

export default router;
