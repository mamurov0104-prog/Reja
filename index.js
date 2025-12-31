
// ------------------------------------  17 dars ---------------------


// /*
// Terminalga yozuv chiqaradi
//  Bu qator Node ishlayaptimi yoki yo‘qmi tekshirish uchun
//  Agar bu chiqsa – demak server.js o‘qilgan
// */

// console.log('Projectning boshlanish nuqtasi ........,,,,,,,,,,.');




// const express = require("express"); // dan Express framework’ni yuklaydi
// const app = express();
// const http = require("http"); // Server yaratish uchun ishlatiladi ,  Express ichida ham HTTP bor, lekin biz o‘zimiz server yaratmoqdamiz

// // ---------------  1 kirish  --------------

// app.use(express.static("public")); // public papkani ochiq qiladi
// app.use(express.json());
// // bizga kelgan data ni object korinishiga ogirib beradi
// app.use(express.urlencoded({extended:true})); // HTML form’dan kelgan ma’lumotni o‘qiydi
// // ---------------  2  --------------

//          // sessions


// // ---------------  3  --------------
// //BSSR-
// // viewlar joylashadigan joy

// app.set("views","views"); // “HTML (EJS) fayllar shu papkada”
// app.set("view engine","ejs") // Express EJS ishlatishini bildiradi
 
// // ---------------  4  --------------
// // Router qism
// // Route (yo‘l) yaratish
// /*
// req → kelgan so‘rov
// res → qaytariladigan javob
// */
// app.get("/sall" , function(req , res){
//     res.end("Hello worldlkdkdk");
//     // res.render("sljgsjglsj")
// });
// app.get("/ssal" , function(req , res){
//     res.end("kdvjnxvkxvnxkjvnkxnvdk");
//     // res.render("sljgsjglsj")
// });

// const server = http.createServer(app);
// /*
// Node’ning HTTP serveri
// Express (app) request handler bo‘lib ishlaydi
// */
// let PORT = 3000;/* Server shu portni eshitadi, 3000 — development uchun standart */
// server.listen(PORT,function(){
// console.log(`THE SERVER IS RUNNING SUCCESSFULLY ON PORT:${PORT}`)
// });

// /* umimiy ish jarayoni :
// Browser → Request → Express → Middleware → Route → Response

// | Qism                | Vazifasi        |
// | ------------------- | --------------- |
// | `express()`         | App yaratadi    |
// | `app.use()`         | Middleware      | Middleware — bu so‘rov (req) kelib, javob (res) ketguncha yo‘lda turadigan oraliq funksiyalar.
// | `static()`          | CSS/JS          |
// | `json()`            | API body        |
// | `urlencoded()`      | Form            |
// | `views`             | HTML joyi       |
// | `view engine`       | Template        |
// | `http.createServer` | Server          |
// | `listen()`          | Ishga tushirish |


// */




// --------------------------------------  18-dars -------------------------------





console.log('Projectning boshlanish nuqtasi ........,,,,,,,,,,.');




const express = require("express"); 
const app = express();
const http = require("http"); 


app.use(express.static("public")); 
app.use(express.json());

app.use(express.urlencoded({extended:true})); 


app.set("views","views"); 
app.set("view engine","ejs") 
 

// app.post("/create-item",(req ,res) => {
// console.log(req.body);
// res.json({test:"success"});
// });
// POST- MALUMOTNI OZI BN OLIB KELADI


app.post("/create-item", (req, res) => {
    

     console.log(req.body);        
     
     console.log(req.body.item);   
     res.json({test:"Muvaffaqiyatli "});
     
});



app.get("/" , function(req , res){
    res.render("reja");
    
});

const server = http.createServer(app);


let PORT = 3000;
server.listen(PORT,function(){
console.log(`THE SERVER IS RUNNING SUCCESSFULLY ON PORT:${PORT}`)
});