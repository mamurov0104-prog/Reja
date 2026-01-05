/*
Browser (reja.ejs + browser.js)
        ↓ axios
Express server (app.js)
        ↓
MongoDB (db.js)

*/

console.log("Web Serverni Boshlash!");
const express = require("express");
const { getDb } = require("./db");
const mongodb = require("mongodb")
const app = express();
/*
http → Node.js server yaratish uchun

app → Express app (route, middleware shu yerda)

connectDB → MongoDB bilan ulanish
*/
/* Middleware */
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Views */
app.set("views", "views");
app.set("view engine", "ejs"); // views/reja.ejs render qilinadi




app.post("/create-item", (req, res) => { // Frontenddan POST keladi
  const Db = getDb();
  const new_reja = req.body.reja; // MongoDB instance + input qiymati

  Db.collection("plans")
    .insertOne({ 
      reja: new_reja,
      edited: false
    }) // MongoDB ga saqlaydi
    .then(result => {
      res.json({
        _id: result.insertedId,
        reja: new_reja,
        edited: false
      }); // Frontendga yangi reja + ID qaytadi - Sahifaga darhol qo‘shiladi
    })
    .catch(err => {
      console.log(err);
      res.status(500).end("Xato");
    });
});


app.post("/delete-item", (req, res) => {
  const Db = getDb();
  const id = req.body.id;// Frontenddan kelgan ID

  Db.collection("plans")
    .deleteOne({ _id: new mongodb.ObjectId(id) }) //MongoDB _id → ObjectId bo‘lishi shart
    .then(() => {
      res.json({ state: "success" }); // Frontendga javob
    })
    .catch(err => {
      console.log(err);
      res.json({ state: "error" });
    });
});

// ------------------ edit me ------------------
//Button → Prompt → Axios → Backend → MongoDB → DOM update
app.post("/edit-item", (req, res) => {
  const Db = getDb(); // 
  const data = req.body;
  /*
  Bu frontend yuborgan JSON yani 1.req.body.id / 2.req.body.new_input
  */

  Db.collection("plans").findOneAndUpdate(  
      /* tepadagi kod faqat bitta hujjat

        faqat bitta field

        qolgan ma’lumotlar buzilmaydi */
    { _id: new mongodb.ObjectId(data.id) },
    { 
      $set: { 
        reja: data.new_input,
        edited: true
      } 
    }
  )
  .then(() => {
    res.json({ state: "success" });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ state: "error" });
  });
});
/*
/edit-item	Edit uchun endpoint
req.body.id	Qaysi reja
$set	Faqat matnni o‘zgartir
findOneAndUpdate	MongoDB update
res.send	Frontendga javob
*/


// B aka kodi / then va catch orqali sodda va tushunishga osson 
// app.post("/edit-item",(req,res)=>{
//   const data = req.body;
//   console.log(data);
//   Db.collection("plans").findOneAndUpdate(
//     {_id:new mongodb.ObjectId(data.id)},
//     {$set:{reja:data.new_input}},
//   function(err,data){
//     res.json({state:"Success"})
//   }

//   )
// res.end("done!")
// })



// ----------------------- edit -me finished -------------------
// ----------------------- delete all started -----------------
// Button → Axios → MongoDB deleteMany → DOM tozalash
app.post("/delete-all", (req, res) => {
  const Db = getDb();

  if (req.body.delete_all) {
    Db.collection("plans").deleteMany({})
      .then(() => {
        res.json({ state: "모든 항목이 삭제되었습니다" }); // frontend bilishi uchun/  foydalanuvchiga xabar chiqarish uchun
      })
      .catch(err => {
        console.log(err);
        res.status(403).json({ state: "error" });
      });
  }
});

/*
deleteMany({}) -	Hech qanday shart yo‘q
{}	- demak hamma hujjatlar
await	- DB tugaguncha kut
res.send	- frontendga javob
*/




// B aka kodi / bu yerda yani yuqorida ham then va catch orqali sodda va yaxshi .
// app.post("/delete-all",(req,res)=>{
//   if(req.body.delete_all){
//     Db.collection("plans").deleteMany(function(){
//       res.json({state:"All plans are deleted !"});
//     });
//   }
// });




// -------------------------- delete all finished ------------------------
app.get("/", (req, res) => { // REJALARNI CHIQARISH (READ)
  const Db = getDb();

  Db.collection("plans") // - Barcha rejalarni oladi
    .find()
    .toArray()
    .then(data => {
      res.render("reja", { items: data }); //- EJS ga uzatadi
    })
    .catch(err => {
      console.log(err);
      res.end("Xato");
    });
});

/*
Rejalar ro‘yxati
<% items.forEach(function(item) { %>
  <%= item.reja %>
<% }) %>
- Backenddan kelgan data
*/
module.exports = app;
