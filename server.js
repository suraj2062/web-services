import express from "express";
import dotenv from 'dotenv';
import courseRoutes from "./routes/course.route.js";
import studentRoutes from "./routes/student.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello");
})

app.use("/course", courseRoutes);
app.use("/student", studentRoutes);
app.use("/auth", authRoutes);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});
