import express from "express";
import dotenv from "dotenv";
import externalRoutes from "./routes/external.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/", (req, res) => {
  res.send("API works");
});

app.use("/", externalRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
