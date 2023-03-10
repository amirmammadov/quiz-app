import mongoose from "mongoose";

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to the Database");
};

mongoose.set("strictQuery", true);

export default connect;
