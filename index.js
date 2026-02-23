import express from "express";
const app = express();
const port = 3000;
import cors from "cors";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    message: "OK",
    status: 200,
  });
});

app.listen(port, () => {
  console.log("server is running on port ", port);
});
