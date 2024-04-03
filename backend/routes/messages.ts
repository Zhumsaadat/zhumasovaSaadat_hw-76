import express from 'express';

const messagesRouter  = express.Router();

messagesRouter.get("/", async (req, res) => {
    res.send('hello');
});

messagesRouter.post("/", async (req, res) => {
    res.send('hello post');
});


export default messagesRouter;