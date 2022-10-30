import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import { PORT } from "./config/config.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
