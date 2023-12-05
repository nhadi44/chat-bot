import "dotenv/config"
import express from 'express';
import chatRouter from "./routes/chatRouter.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/api/chat-bot", chatRouter);


app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`)
})
