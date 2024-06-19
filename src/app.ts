import './config/datadog.js';
import express from 'express';
import {ChatOpenAI} from "@langchain/openai";
import {PromptTemplate} from "@langchain/core/prompts";
import {JsonOutputParser} from "@langchain/core/output_parsers";
import dotenv from "dotenv";

dotenv.config();


const app = express();

const prompt = PromptTemplate.fromTemplate(`Return a JSON object with a 'text' field containing a joke`);

const llm = new ChatOpenAI({modelName: "gpt-4o", verbose: true, apiKey: "doesntmatter"})
    .bind({
        response_format: {
            type: "json_object",
        },
    });

const parser = new JsonOutputParser();

const chain = prompt.pipe(llm).pipe(parser);

console.log(await chain.invoke({}));

app.listen(process.env.PORT || 3000);