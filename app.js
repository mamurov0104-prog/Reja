



console.log("Projectning boshlanish nuqtasi ........,,,,,,,,,,.");




// const console = require("console");
const express = require("express"); 
const app = express();
const http = require("http"); 

// ---- MongoDb connection 
// const db = require("./server").db(); //commentdan chiqsa xato beryabdi
app.use(express.static("public")); 
app.use(express.json());

app.use(express.urlencoded({extended:true})); 


app.set("views","views"); 
app.set("view engine","ejs") 
 



app.post("/create-item", (req, res) => {
    
    console.log("User entered / create-item")

     console.log(req.body);        
     res.end("Access")
     const new_reja = req.body.reja; 
    db.collection("plans").insertOne({reja: new_reja}, (err,data) =>{
        if(err){
            console.log(err);
            res.end('something went wrong');
        } else{
             res.end("chotki boldi hammasi !")
        }
    });
    //  console.log(req.body.item);   
     res.json({test:"Muvaffaqiyatli "});
     
});



app.get("/" , function(req , res){
    console.log("User entered /")
    db.collection("plans").find().toArray((err,data) =>{
        if(err){
            console.log(err);
        res.end(" Nimdaidr xato ")
        } else{
            console.log(data);
            res.render("reja", {item:data});

        }
    })
    
});

module.exports = app;
