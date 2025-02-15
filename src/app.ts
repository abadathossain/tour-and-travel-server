import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Hello my Tour and travel server 👉!",
  });
});

export default app;
