import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";

import booRoute from "./Routes/book.route.js"
import userRoute from "./Routes/user.route.js"

const app = express()
app.use(cors())
app.use(express.json());

dotenv.config();
const PORT= process.env.PORT || 4001;
const URI= process.env.MongoDBURI;



//connect to mongoDb

try {
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("connected to MongoDB")
} catch (error) {
  console.log("Error ",error);
}

//defining routes
app.use("/book",booRoute)
app.use("/user",userRoute)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})