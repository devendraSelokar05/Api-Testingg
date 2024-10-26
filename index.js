import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectionDB from "./config/db.js";
import MovieRoutes from "./routes/newmovies.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type'
}));

connectionDB();
app.use("/api", MovieRoutes);




// Listen to server on the defined PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
