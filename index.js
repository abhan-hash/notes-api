const express = require('express');
const app = express();

const PORT = 3000;

const notesrouter = require('./routes/notes.js')

// middleware to parse json body
app.use(express.json());

app.listen(PORT);

app.use('/notes',notesrouter);
