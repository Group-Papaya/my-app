import { checkIfAuthenticated } from './auth.middleware';
import * as Express from "express";
import * as Cors from "cors";
import axios from 'axios';

const app = Express();
const port = 3000;

app.use(Cors());

app.get("/", (_, res) => {
    return res.send("Hello World!");
})

app.listen(port, () => console.log("Working on port " + port))

app.get("/ttk", checkIfAuthenticated, async (_, res: Express.Response) => {
    const gotVal = await sendRequest();
    return res.json(gotVal.data);
})

const sendRequest = async () => {
    const characters = await axios.get<[{ character: string }]>(
        "https://www.breakingbadapi.com/api/characters"
    );
    return characters;
}