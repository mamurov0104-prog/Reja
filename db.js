const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://mamurov0104_db_user:YbFdFnRkWAC0UAQm@cluster0.qpjarec.mongodb.net/?appName=Cluster0";

const client = new MongoClient(connectionString);

let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    console.log("MongoDB connection succeeded");
    db = client.db("Reja");
  }
  return db;
}

function getDb() {
  if (!db) {
    throw new Error("Database not initialized!");
  }
  return db;
}

module.exports = {
  connectDB,
  getDb,
};
