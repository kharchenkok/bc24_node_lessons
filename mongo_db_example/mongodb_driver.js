import dotenv from "dotenv";
import path from "path";
import mongodb from "mongodb";
// import { getPaths } from "./src/helpers/utils";
import { getPaths } from "./utils.js";

// mongodb+srv://admin:MWZ6UZ526wd2Myu@cluster0.qsd9f.mongodb.net/mongo_db_basics?retryWrites=true&w=majority


const { __dirname } = getPaths(import.meta.url);
dotenv.config({ path: path.join(__dirname, ".env") });
const { MongoClient, ObjectID } = mongodb;

const client = await MongoClient.connect(process.env.MONGODB_URL);
const db = client.db("mongo_db_basics");

const postsCollection = db.collection("posts");

// const newPost = await postsCollection.insertOne({
//   title: "post",
//   content: "I created post",
//   createdAt: new Date(),
// });
// 601c50f2cb86145628b07a51
// const post = await postsCollection.findOne({
//   _id: new ObjectID("601c50f2cb86145628b07a51"),
// });
// console.log(post);

const posts = await postsCollection.find().sort({ createdAt: -1 }).toArray();
console.log(posts);

// await postsCollection.updateOne(
//   {
//     _id: new ObjectID("60152f77e25f66a434ef59d3"),
//   },
//   {
//     $set: { title: "update title" },
//   }
// );

// await postsCollection.deleteMany();