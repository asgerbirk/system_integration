import express from "express";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `${new Date().toISOString()} - ${req.method} request to ${req.path}`
  );
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next();
});

app.post("/webhook", (req, res) => {
  console.log("Received webhook:", req.body);
  res.sendStatus(200).send("Webhook data received");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
