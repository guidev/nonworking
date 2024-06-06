import './config/datadog.js';
import express, {NextFunction, Request, Response} from 'express';
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter";


const app = express();

app.get('/health', async (req, res, next) => {
    const textSplitter = new RecursiveCharacterTextSplitter({chunkSize: 7000, chunkOverlap: 2000});
    console.log(textSplitter);
    res.end();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).end();
})

app.listen(process.env.PORT || 3000);