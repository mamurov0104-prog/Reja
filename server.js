const http = require("http");
const mongodb = require("mongodb");

let db;

// const connectionString = "mongodb+srv://mamurov0104_db_user:YbFdFnRkWAC0UAQm@cluster0.qpjarec.mongodb.net/?appName=Cluster0";
// mongodb+srv://mamurov0104_db_user:YbFdFnRkWAC0UAQm@cluster0.qpjarec.mongodb.net/?appName=Cluster0
//mongodb+srv://mamurov0104_db_user:YbFdFnRkWAC0UAQm@cluster0.qpjarec.mongodb.net/?appName=Cluster0
//mongodb+srv://Akbar_db_user:HwuiydkLSPjYL0tb@cluster0.z2glep5.mongodb.net/
const connectionString = "mongodb+srv://Akbar_db_user:HwuiydkLSPjYL0tb@cluster0.z2glep5.mongodb.net/"
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB");
    } else {
    //   db = client.db("Reja");
       console.log(client)
        console.log('muvaffaqiyatli boldi shep !')
        // module.exports=client;
      const app = require("./app");
      const server = http.createServer(app);

      let PORT = 3000;

      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

// module.exports = db;





// const server = http.createServer(app);
// const app = require("./app");
//  const mongodb = require("mongodb");
// let db;
// const connectionString = "MONGO_URI=mongodb+srv://mamurov0104_db_user:PAROL@cluster0.qpjarec.mongodb.net/reja_db?authSource=adminPORT=3000";
// // mongodb.connect(connectionString,{useNewUrlParser:true}
// let PORT = 3000;
// server.listen(PORT,function(){
// console.log(`THE SERVER IS RUNNING 
//     SUCCESSFULLY ON PORT:${PORT}`)
// });



// const http = require("http");
// const mongodb = require("mongodb");

// const MongoClient = mongodb.MongoClient;

// let db;

// // MongoDB Atlas connection string
// const connectionString =
//   "mongodb+srv://todouser:todo14@cluster0.b9lez.mongodb.net/Reja?authSource=admin";

// // MongoDB ga ulanish
// MongoClient.connect(
//   connectionString,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err, client) => {
//     if (err) {
//       console.log(" MongoDB ga ulanishda xatolik");
//       console.error(err);
//       return;
//     }

//     console.log("MongoDB muvaffaqiyatli ulandi");

//     // Database ni olish
//     db = client.db("Reja");

//     // Express app
//     const app = require("./app");

//     // Server yaratish
//     const server = http.createServer(app);

//     const PORT = 3000;

//     server.listen(PORT, () => {
//       console.log(
//         ` Server ishga tushdi: http://localhost:${PORT}`
//       );
//     });
//   }
// );

// // db ni boshqa fayllarda ishlatish uchun
// module.exports = {
//   getDb: () => db,
// };
