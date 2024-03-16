import express from "express";

const app = express();

// Serve static files
app.use(express.static("public"));

const randomNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

app.get("/randomNumbers", (req, res) => {
  res.send({ data: randomNumbers });
});

app.post("/simulateNewRandomNumbers", (req, res) => {
  const newNumber = getRandomInt(3, 100);
  randomNumbers.push(newNumber);
  res.send({ data: newNumber });
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const PORT = 8080;

app.listen(PORT, () => console.log("Server is running on port 8080"));
