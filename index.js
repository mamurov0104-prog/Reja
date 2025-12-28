// callback function ======>>>>>

// ----- settimeout orqali kod bloklash -----------

// hello1();
// goodBye1();
// function hello1(){
//     setTimeout(() => {
//     console.log('Hello');
        
//     }, 3000);
// }
// function goodBye1(){
//     console.log('Goodbye ');
// }


/*
bu yerda biz hello() functionni birinchi 
chaqirsak ham u avvalk 3 sek kutib keyin ishlaydi!
*/

hello2(goodBye2); // pass a function as a argument 

function hello2(callback){
  console.log('Hello 2');
    callback();
}
function goodBye2(){
    console.log('Goodbye 2');
}



// ------------------- 2 ----------------
sum(displayConsole,11,22 )
function sum(callback,x,y){
let result = x+y;
callback(result)
}
function displayConsole(result){
    console.log('Displayda korniadigan natija :' , result);
}




// -----------  MIT HOMEWORK --------------

console.log (" Kimnidir maslahatlari");
const list = [
     "Yaxshi talaba boling ",
     " Togri bsohliq tanlang va xato qilishdan qorqmang",
     "oz ustingizda ishlashni boshlang",
     "qolingizdan kelgan eng yaxshi ishlarni qiling ",
     "Farzandlaringni ta'limi uchun pul ayamang",
     "Endi dam oling va bad steriotip odat kami umr boyi sizning boyningizga ilinganqarz ya'ni namozni ado eting"
];

function maslahatBering(a,callback){
    if(typeof a !== "number")callback("Insert a number", null);
    else if (a<=20)callback(null,list[0]);
    else if (a>20 && a <=30)callback(null,list[1]);
    else if (a>30 && a <=40)callback(null,list[2]);
    else if (a>40 && a <=50)callback(null,list[3]);
    else if (a>50 && a <=60)callback(null,list[4]);
    else{
        callback(null,list[5]);
    };
    

};
   maslahatBering(21,(err,data)=>{
if(err) console.log("Error",err);
console.log("Javob:",data);
   });
