import { Sequelize } from "sequelize";
import db from "./Database.js";

// Membuat tabel "notes"
const Note = db.define(
  "notes", // Nama tabel
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false, // Wajib diisi
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  }
);

db.sync().then(() => console.log("Database synced"));

export default Note;
