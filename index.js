import express from 'express';
import router from './NoteRoute.js';
import db from './Database.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(router);

// Test koneksi database
db.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Database error:', err));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});