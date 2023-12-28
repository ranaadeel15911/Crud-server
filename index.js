import express from "express";
import connectToDb from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/user.js";
const app = express();

// app.use(cors());
app.use(cors({
  origin:["https://blog-frontend-psi-six.vercel.app","http://localhost:3000"],
  methods:["POST","GET","DELETE"],
  credentials:true
}))

app.use(express.json());

connectToDb();

app.use(express.static("public/upload"));
app.get("/", (req, res) => {
  res.send("api is running");
});

// api routes

app.use("/api/v1", userRoutes);

// app.listen(9090, () => {
app.listen(9090, () => {
  console.log(`Api is running on http://localhost:9000 `);
});
