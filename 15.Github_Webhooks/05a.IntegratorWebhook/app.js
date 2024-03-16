import express from "express";

const app = express();

app.use(express.json());
app.post("/webhook", (req, res) => {
  console.log("Received webhook:", req.body);
  // Here you'd handle the webhook data. For now, we're just logging it.
  res.status(200).send("Webhook data received");
});

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
