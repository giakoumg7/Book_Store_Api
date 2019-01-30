import express from "express";

import {BookController} from "./controllers/book.controller";

const app: express.Application = express();

app.use("/", BookController);

// tslint:disable-next-line:no-console
app.listen(process.env.PORT || 8080, () =>  console.log("Server Started..."));
