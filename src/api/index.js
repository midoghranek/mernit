const express = require("express");
const app = express();
const cors = require("cors");
const port = 9090;

app.use(cors());

app.get("/", (req, res) => {
  res.send("GHRANEK.COM");
});

app.listen(port, () => {
  console.log(`Api listening on port http://localhost:${port}`);
});
