import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// cache for jobs
let cachedJobs = null;
let lastFetch = 0;

// GET /api/jobs with optional filters
app.get("/api/jobs", (req, res) => {
  const now = Date.now();
  const { type, level } = req.query;

  try {
    // Load jobs from file if cache is empty or expired
    if (!cachedJobs || now - lastFetch > 10 * 60 * 1000) {
      const rawData = fs.readFileSync("./db.json", "utf-8");
      const data = JSON.parse(rawData);
      cachedJobs = data.jobs; // cache only jobs array
      lastFetch = now;
    }

    // Start filtering from cached jobs
    let filteredJobs = [...cachedJobs];

    // 🔹 Apply optional type filter
    if (type && type.trim() !== "") {
      // Handle comma-separated types
      const types = type.split(",").map(t => t.trim().toLowerCase());
      filteredJobs = filteredJobs.filter((job) => {
        const jobType = job.type ? job.type.toLowerCase() : "";
        return types.includes(jobType);
      });
    }

    // 🔹 Exclude entry-level jobs by default (if they exist)
    filteredJobs = filteredJobs.filter((job) => !job.level || job.level !== "entry");

    res.json({ jobs: filteredJobs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to read jobs" });
  }
});

// POST /update-json to add a new job
app.post("/update-json", (req, res) => {
  try {
    const rawData = fs.readFileSync("./db.json", "utf-8");
    const data = JSON.parse(rawData);

    // Create new job object with auto-incremented ID and timestamp
    const newJob = {
      id: Math.max(...data.jobs.map((job) => job.id), 0) + 1,
      ...req.body,
      created: new Date().toISOString().split("T")[0],
    };

    // Add new job to jobs array
    data.jobs.push(newJob);

    // Write updated data back to db.json
    fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));

    // Clear cache to force fresh read
    cachedJobs = null;

    res.json({ success: true, job: newJob });
  } catch (err) {
    console.error("Error updating JSON:", err);
    res.status(500).json({ error: "Failed to update JSON file" });
  }
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
