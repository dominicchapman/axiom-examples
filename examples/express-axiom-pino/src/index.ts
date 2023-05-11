import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import pino from "pino";

const app = express();

const port = 4321;

const logger = pino(
  { level: "info" },
  // Transport is not published, so point to local target
  pino.transport({
    target: "../../axiom-pino/dist/index.js",
    options: {
      axiomDatasetId: process.env.AXIOM_DATASET_ID,
      axiomOrgId: process.env.AXIOM_ORG_ID,
      axiomToken: process.env.AXIOM_TOKEN,
    },
  })
);

app.get("/", (_req, res) => {
  logger.info("Hello world from Axiom with Pino.");
  res.send("Welcome to Axiom with Pino.");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
