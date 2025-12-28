/*
Shunday 2 parametrli function tuzing, hamda birinchi
 parametrdagi letterni ikkinchi parametrdagi sozdan 
 qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.


Function yozasiz va uning ichida loop yoki forEach qib aylandirib
e digan harib engineer digan sozda 3 marta bor va shu 3 marta qatnashgan shuni qaytarsin

*/
//a-letter
//b-soz
let count = 0;

function hisob ( a, b){

for(let i = 0;i<b.length; i++){
    if(b[i]===a){
        // for soz uzunligicha aylanadi va har bitta aylanvotkanda har bitta harfni tekshiradi
        count++; // nechta marta topilganini sanash uchun
    }
}
return count 
}; 
console.log(hisob("a","alifbodaNechaHarfBor"));
console.log(hisob("b","bilolBugunBozorgaBormayBogdaBolalarBilanBaliqTutdi"))