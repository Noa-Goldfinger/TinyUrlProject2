import cors from "cors"
import express from 'express'  
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import LinkRouter from "./Routers/LinkRouter.js";
import UserRouter from "./Routers/UserRouter.js";
import connectDB from "./database.js"
// import dotenv from 'dotenv';


//לשים בגיטאיגנור את הקובץ תצורה(.env)
const secret = "JIs%WCfS#Sl454d5FX";
connectDB();
const app = express()
// dotenv.config();

app.use(cors());
app.use(bodyParser.json());

const port = 3000
app.post("/login", (req, res) => {
    if (req.body.userName == "noa" && req.body.password == "123456") {
      const token = jwt.sign(
        { userId: 1, userName: "noa", roles: ["student"] }, secret);
      res.send({ accessToken: token });
    } else {
      res.status(401).send({ message: "unauthorized" });
    }
  });

// app.use("/", (req, res, next) => {
//     const token = req.headers.authorization?.slice(7);
//     console.log("token", token);
//     try {
//       const decoded = jwt.verify(token, secret);
//       req.userId = decoded.userId;
//       next();
//     } catch {
//       res.status(401).send({ message: "unauthorized" });
//     }
//   });
  
app.use('/links', LinkRouter);
app.use('/users', UserRouter);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
