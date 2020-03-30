import express from "express";
import health from "./health";
import data from "./data";
import users from "./users";
import { validateAuthentication } from "../middlewares";

const app = express();

app.use("/health", health);
// app.use(validateAuthentication);
app.use("/data", data);
app.use("/users", users);

export default app;
