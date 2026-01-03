const http = require("http");
const app = require("./app");
const { connectDB } = require("./db");

async function startServer() {
  try {
    await connectDB();

    const server = http.createServer(app);
    const PORT = 3000;

    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

startServer();

// const http = require("http");
// const { MongoClient } = require("mongodb");
// const app = require("./app");

// const connectionString =
//   "mongodb+srv://mamurov0104_db_user:YbFdFnRkWAC0UAQm@cluster0.qpjarec.mongodb.net/?appName=Cluster0";

// const client = new MongoClient(connectionString);

// let db;

// async function startServer() {
//   try {
//     await client.connect();
//     console.log("MongoDB connection succeeded");

//     db = client.db("Reja"); // 🔴 DATABASE NOMI MUHIM

//     const server = http.createServer(app);
//     const PORT = 3000;

//     server.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

// startServer();

// module.exports = {
//   getDb: () => db,
// };



// const http = require("http");
// const { MongoClient } = require("mongodb");
// const app = require("./app");

// const connectionString =
//   "mongodb+srv://mamurov0104_db_user:YbFdFnRkWAC0UAQm@cluster0.qpjarec.mongodb.net/?appName=Cluster0";

// const client = new MongoClient(connectionString);

// // let db; // global DB reference

// async function startServer() {
//   try {
//     await client.connect();
//     console.log("MongoDB connection succeeded");

//     // db = client.db("yourDatabaseName");
//     Db = client.db("Rejaa");

//     const server = http.createServer(app);
//     const PORT = 3000;

//     server.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.error("ERROR connecting to MongoDB:", err);
//   }
// }

// startServer();

// /* Export DB getter */
// module.exports = {
//   getDb: () => db,
// };




// const http = require("http");
// const { MongoClient } = require("mongodb");
// const app = require("./app");

// const connectionString =
//   "mongodb+srv://mamurov0104_db_user:YbFdFnRkWAC0UAQm@cluster0.qpjarec.mongodb.net/?appName=Cluster0";

// const client = new MongoClient(connectionString);

// global.Db = null; 
// async function startServer() {
//   try {
//     await client.connect();
//     console.log("MongoDB connection succeeded");

//     global.Db = client.db("Reja"); 
//     console.log("Database ready");

//     const server = http.createServer(app);
//     const PORT = 3000;

//     server.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.error("ERROR connecting to MongoDB:", err);
//   }
// }

// startServer();
