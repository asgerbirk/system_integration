import express from "express";
import { setupDb } from "./database.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const dbPromise = setupDb();

dbPromise
  .then(() => console.log("Database is ready."))
  .catch((error) => console.error("Database setup failed:", error));

const validEventTypes = [
  "payment received",
  "payment processed",
  "invoice processing",
  "invoice completed",
];

app.post("/register", async (req, res) => {
  const { url, eventType } = req.body;
  console.log("Received registration request with body:", req.body);
  const db = await dbPromise;

  if (!validEventTypes.includes(eventType)) {
    return res.status(400).send("Invalid event type");
  }

  await db.run("INSERT INTO webhooks (url, eventType) VALUES (?, ?)", [
    url,
    eventType,
  ]);
  console.log("Webhook registered:", url, eventType);
  res.send("Webhook registered");
});

app.post("/unregister", async (req, res) => {
  const { url } = req.body;
  console.log("Unregistering webhook:", req.body);
  const db = await dbPromise;

  await db.run("DELETE FROM webhooks WHERE url = ?", [url]);
  console.log("Webhook unregistered:", url);
  res.send("Webhook unregistered");
});

app.post("/ping", async (req, res) => {
  const { eventType } = req.body;
  console.log("Pinging event type:", eventType);
  const db = await dbPromise;

  if (!validEventTypes.includes(eventType)) {
    return res.status(400).send("Invalid event type");
  }

  const webhooks = await db.all("SELECT * FROM webhooks WHERE eventType = ?", [
    eventType,
  ]);
  console.log(`Found webhooks for event type '${eventType}':`, webhooks);

  webhooks.forEach((webhook) => {
    console.log(`Pinging ${webhook.url}`);
    // Here you'd normally send a HTTP request to the webhook.url using a library like axios or fetch
  });

  res.send("Pinged all matching webhooks.");
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
