const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
// const { version } = require('react');
const app = express ();
const PORT = 3001;

app.use(express.json());

app.use(cors({
    origin : "http://localhost:3000", // link frontend
    credentials : true
}));

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pw_praktikum_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.get("/", (req, res) => {
    res.send(" Server bejalan dengan baik");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/api/info", (req, res) => {
    res.json({
        message: "API MERN Stack Build by Express JS",
        version: "v1.0.0",
        status: "active",
        timestamp: new Date()
    });
});