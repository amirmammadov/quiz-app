import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";

/*connect method for database access*/
import connect from "./database/connection.js";

const app = express();

/*middlewares*/
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

/*application port*/
const port = process.env.PORT || 8080;

/*routes*/
app.use("/api/v1", router);

app.get("/", (req, res) => {
  try {
    res.json("get request");
  } catch (error) {
    res.json(error);
  }
});

/*start server after getting connection to the database*/
const getConnect = async () => {
  try {
    await connect();
    app.listen(port, console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

getConnect();
