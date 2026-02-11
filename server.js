const express = require('express');
const cors = require('cors');
const path = require('path');
// const sqlite3 = require('sqlite3').verbose(); // Database setup if needed later

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files from root

// Database setup (Optional/Placeholder)
// const db = new sqlite3.Database('./valentine.db', (err) => {
//     if (err) console.error(err.message);
//     else console.log('Connected to the SQLite database.');
// });

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API placeholders (if you want to add backend logic later)
app.get('/api/status', (req, res) => {
    res.json({ status: 'active', message: 'Valentine Server is running! 💖' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT}`);
});
