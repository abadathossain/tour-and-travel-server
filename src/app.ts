import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/user/user.route";
import tourRouter from "./app/modules/tour/tour.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/tour", tourRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Hello my Tour and travel server 👉!",
  });
});

export default app;
