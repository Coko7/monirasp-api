import express from "express";
import cors from "cors";
import { csvToJson } from "./utilities";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (_, res) => {
  res.send("monirasp-backend is up and running!");
});

app.get("/temperature", (_, res) => {
  let tempData = csvToJson("./data/temperatures.csv");
  res.send(tempData.at(-1));
});

app.listen(port, () => {
  console.log(`monirasp-backend app listening on port ${port}`);
});
