import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
app.use(cors());
app.use(bodyParser.json());

let cachedJobs = null;
let lastFetch = 0;

app.get("/api/jobs", (_req, res) => {
  const now = Date.now();

  if (cachedJobs && now - lastFetch < 10 * 60 * 1000) {
    // return cached data if less than 10 mins old
    return res.json(cachedJobs);
  }

  try {
    const rawData = fs.readFileSync("./auth/db.json", "utf-8");
    const data = JSON.parse(rawData);
    cachedJobs = data;
    lastFetch = now;
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to read jobs" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
