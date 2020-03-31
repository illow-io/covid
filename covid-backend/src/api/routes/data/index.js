import express from "express";
import enrich from "./enrich";
import upload from "./upload";
import hotSpots from "./hotSpots";

const app = express();

app.use("/enrich", enrich);
app.use("/enrich", upload);
app.use("/hot-spots", hotSpots);

export default app;
