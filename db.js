/*
Bu fayl DATABASE boshqaruvi uchun
*/

const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://mamurov0104_db_user:YbFdFnRkWAC0UAQm@cluster0.qpjarec.mongodb.net/?appName=Cluster0";
/* MongoDB Atlas bilan ulanish */
const client = new MongoClient(connectionString);

let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    console.log("MongoDB connection succeeded");
    db = client.db("Reja");
    /*
          Singleton pattern :

      1 marta ulanadi

      Qayta-qayta connection ochilmaydi
    */
  }
  return db;
}

function getDb() {
  if (!db) {
    throw new Error("Database not initialized!"); // Agar DB ulanmagan bo‘lsa → xato chiqaradi
  }
  return db;
}

module.exports = {
  connectDB,
  getDb,
};
