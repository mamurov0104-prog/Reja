

console.log (" Kimnidir maslahatlari");
const list = [
     "Yaxshi talaba boling ",
     " Togri bsohliq tanlang va xato qilishdan qorqmang",
     "oz ustingizda ishlashni boshlang",
     "qolingizdan kelgan eng yaxshi ishlarni qiling ",
     "Farzandlaringni ta'limi uchun pul ayamang",
     "Endi dam oling va bad steriotip odat kabi umr boyi sizning boyningizga ilingan qarz ya'ni namozni ado eting"
];

async function maslahatBering(a){
    if(typeof a !== "number")throw new Error ("Insert a number", null);
    else if (a<=20)  return list[0];
    else if (a>20 && a <=30) return list[1];
    else if (a>30 && a <=40) return list[2];
    else if (a>40 && a <=50) return list[3];
    else if (a>50 && a <=60) return list[4];
    else{
         return list[5];

        //  return new Promise((resolve,reject)=>{
        //     setTimeout(function(){
        //         resolve(list[5]);
        //     },5000);
        //             });


    //      setTimeout(function(){
    //      return list[5];
    //      }, 5000);
    // };


    };

};
/*
console.log("Passed here 0");
// then/catch  -------
maslahatBering(25)
.then(data =>{
    console.log("javob"+ data);
}).catch(err =>{
    console.log("Error:", err);
});   
console.log("Passed here 1");
*/
async function run() {
    let javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(31);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
    javob = await maslahatBering(54);
    console.log(javob);
    javob = await maslahatBering(62);
    console.log(javob);
    
}
run();