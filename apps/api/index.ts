import express from "express";

const app = express();

app.get("/hit", (req, res) => {
  res.json({
    data: "Working fine",
  });
});

app.listen(3032);
