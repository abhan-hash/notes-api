const { error, timeEnd } = require('console');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const { json } = require('stream/consumers');

router.get('/',(req,res) => {

    const data = fs.readFileSync('data.json','utf-8');
    const notes = JSON.parse(data);

    res.json(notes);
})

router.post('/',(req,res) => {
    const data = fs.readFileSync('data.json','utf-8');
    const notes = JSON.parse(data);

    const newNote = {
        id : Date.now(),
        title : req.body.title,
        content : req.body.content,
    };

    notes.push(newNote);

    fs.writeFileSync('data.json',JSON.stringify(notes,null,2));
    res.status(201).json(newNote);
});

router.get('/:id',(req,res) => {
    const noteId= Number(req.params.id);

    const data = fs.readFileSync('data.json','utf-8');
    const notes = JSON.parse(data);

    const note = notes.find(n => n.id === noteId);

    if (!note) {
        res.status(404).json({error : "note not found"});
    }

    res.json(note);
});

router.delete('/:id',(req,res) => {
    const noteId = Number(req.params.id);

    const data = fs.readFileSync('data.json','utf-8');
    const notes = JSON.parse(data);

    const filteredNotes = notes.filter(n => n.id !== noteId);

    if(notes.length === filteredNotes.length) {
       return res.status(404).json({error : 'note doesnt exist to delete'});
    }

    fs.writeFileSync('data.json',JSON.stringify(filteredNotes,null,2));
    res.json({message : 'note deleted successfully'});
});

router.put('/:id',(req,res) => {
    const noteId = Number(req.params.id);
    const data = fs.readFileSync('data.json','utf-8');
    const notes = JSON.parse(data);

    const { title , content } = req.body;

    const noteIndex = notes.findIndex(n => n.id === noteId);

    if (noteIndex === -1){
        return res.status(404).json({error : 'note not found'});
    }
 
    notes[noteIndex].title = title;
    notes[noteIndex].content = content;

    fs.writeFileSync('data.json',JSON.stringify(notes,null,2));
    res.json(notes[noteIndex]);
});




module.exports = router;
