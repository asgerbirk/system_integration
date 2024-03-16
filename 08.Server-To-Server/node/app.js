import express from "express";

const app = express();

const PORT = 8080;

app.use(express.static("public"));

app.get("/requestFastApi", async (req, res) => {
  const response = await fetch("http://127.0.0.1:8000/fastapiData");
  const data = await response.json();
  res.send({ "Data ": data });
});

app.get("/", async (req, res) => {
  const date = new Date().toISOString();

  res.send("index.html", { date });
});

app.get("/expressData", (req, res) => {
  res.send({ isRunning: true });
});

app.listen(PORT, () => console.log("Server is running on port 8080"));
