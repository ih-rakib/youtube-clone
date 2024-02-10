import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoutes from "./routes/auth.js"; 
import userRoutes from "./routes/users.js"; 
import videoRoutes from "./routes/videos.js"; 
import commentRoutes from "./routes/comments.js"; 
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

const uri = process.env.MONGO;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await mongoose.disconnect();
  }
}
run().catch(console.dir);


app.use(express.json())
// app.use(cors())

app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.use((err, req,res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";

  return res.status(status).json({
    success: false,
    status,
    message
  })
})

app.listen(8800, ()=> {
    console.log("Connected to server");
})