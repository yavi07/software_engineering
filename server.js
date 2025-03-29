const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from yajvin! This web application is deployed on Kubernetes!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
