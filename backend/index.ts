import express from 'express';
import cors from  'cors';
import messagesRouter from './routes/messages';
import fileDb from  './fileDb'

const app = express();
app.use(express.json());
const port = 8000;

app.use(cors());
app.use('/messages', messagesRouter);

const run = async () => {
    await fileDb.init();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

void run();

