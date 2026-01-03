console.log("Web Serverni Boshlash!");
const express = require("express");
const { getDb } = require("./db");
const mongodb = require("mongodb")
const app = express();

/* Middleware */
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Views */
app.set("views", "views");
app.set("view engine", "ejs");

/* Routes */
// app.post("/create-item", (req, res) => {
//   const Db = getDb();
//   const new_reja = req.body.reja;
//   Db.collection("plans")
//     .insertOne({ reja: new_reja })
//     .then(() => res.redirect("/"))
//     .catch(err => {
//       console.log(err);
//       res.end("Xato");
//       console.log(data);
//      res.json(data.ops[0]); // joyi

//     });
// });


app.post("/create-item", (req, res) => {
  const Db = getDb();
  const new_reja = req.body.reja;

  Db.collection("plans")
    .insertOne({ reja: new_reja })
    .then(result => {
      res.json({
        _id: result.insertedId,
        reja: new_reja
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).end("Xato");
    });
});


app.post("/delete-item", (req, res) => {
  const Db = getDb();
  const id = req.body.id;

  Db.collection("plans")
    .deleteOne({ _id: new mongodb.ObjectId(id) })
    .then(() => {
      res.json({ state: "success" });
    })
    .catch(err => {
      console.log(err);
      res.json({ state: "error" });
    });
});

// app.post("/delete-item",(req,res) =>{
// const id = req.body.id;
// Db.collection("plans").deleteOne({id:new mongodb.ObjectId(id)},function(err,data){
//   res.json({state:"succes"});
// })
// // console.log(id);
// // res.end("Done")
// })
app.get("/", (req, res) => {
  const Db = getDb();

  Db.collection("plans")
    .find()
    .toArray()
    .then(data => {
      res.render("reja", { items: data });
    })
    .catch(err => {
      console.log(err);
      res.end("Xato");
    });
});

module.exports = app;



// console.log("Web Serverni Boshlash!");
// const express = require("express");
// const app = express();
// // const { getDb } = require("./server"); 
// const { getDb } = require("./server");


// /* 1: Middleware */
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// /* 3: Views */
// app.set("views", "views");
// app.set("view engine", "ejs");

// /* 4: Routes */
// app.post("/create-item", (req, res) => {
//   const Db = getDb();
//   console.log("user entered "+req.body);
//   const new_reja = req.body.reja;
//   Db.collection("plans").insertOne({reja: new_reja},(err,data)=>{
//     if(err){
//       console.log(err);
//       res.end("nimadur xato");
//     }
//     else{
//       console.log(data);
//       res.end("succesfully added");
//     }
//   })
//   // res.json({ test: "success" });
//     // res.end("ulandi !")

// });

// app.get("/", (req, res) => {
//    const Db = getDb();
//   Db.collection("plans").find().toArray ((err,data) =>{
//    if(err){
//     console.log(err);
//     res.end("something went wrong !")
//    }
//    else{
//     console.log(data);
//     console.log("chotki ulandi");
//     res.render("reja",{items:data});

//    }
//   });
// });

// module.exports = app;
