import express from "express";
import bodyParser from "body-parser";

import userRouter from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRouter);

app.get('/', (req, res) => {
    console.log(`[TEST]!`);

    res.send("HELLO FROM THE HOMEPAGE");
})

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));
