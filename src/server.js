const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();

const db = new sqlite3.Database('data.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`
      CREATE TABLE IF NOT EXISTS submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT
      )
    `);
  }
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  db.run(
    'INSERT INTO submissions (name, email) VALUES (?, ?)',
    [name, email],
    (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Failed to save submission' });
      } else {
        res.json({ message: 'Submission saved successfully' });
      }
    }
  );
});

app.listen(3004, () => {
  console.log(`Server listening at http://localhost:3004`);
});
