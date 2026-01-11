
// -------------------------------------- / new started /  --------------------------------------------

function findDoublers(str) {
    for (let i = 0; i < str.length; i++) {
        // Agar shu harf yana boshqa joyda bo‘lsa
        if (str.indexOf(str[i]) !== i) {
            return true;
        }
    }
    return false;
}

console.log(findDoublers("hello")); // true
console.log(findDoublers("abc"));   // false

// -------------------------------------- / new finished /  --------------------------------------------

// // -------------------------  new task started --------------------------------------

// // getReverse nomli function e’lon qilinyapti
// function getReverse(str) {

//   // str ni harflarga ajratib ARRAY ga aylantiryapmiz
//   // "hello" → ["h", "e", "l", "l", "o"]
//   const arr = str.split("");

//   // array elementlarini TESKARI tartibga o‘tkazyapmiz
//   // ["h","e","l","l","o"] → ["o","l","l","e","h"]
//   arr.reverse();

//   // teskari bo‘lgan arrayni yana STRING ga yig‘yapmiz
//   // ["o","l","l","e","h"] → "olleh"
//   const result = arr.join("");

//   // yakuniy teskari stringni qaytaryapmiz
//   return result;
// }

// console.log(getReverse("Muhammadaliev")); 

// console.log(getReverse("Mamurov")); 
































































console.log(getReverse("Nabiev")); 

// // -------------------------  2  ----------------------

// // getReverse nomli function e’lon qilinyapti
// function getReverse(str) {

//   // bo‘sh string yaratib olyapmiz
//   // bunda teskari natijani yig‘amiz
//   let result = "";

//   // string uzunligining oxiridan boshlab aylanyapmiz
//   // i = oxirgi indeks
//   for (let i = str.length - 1; i >= 0; i--) {

//     // har bir belgini result boshiga qo‘shyapmiz
//     // masalan: "o" + "" → "o"
//     // keyin: "l" + "o" → "lo"
//     result += str[i];
//   }

//   // teskari bo‘lgan stringni qaytaryapmiz
//   return result;
// }


// console.log(getReverse("Bilol")); 

// console.log(getReverse("Hojiakbar")); 
// console.log(getReverse("Nematillo")); 

// // ----------------------------  2 -----------------------
// // ------------------------ new task finished ------------------------







// // Shop degan class yaratamiz
// class Shop {

//   // constructor — classdan object yaratilganda ishga tushadi
//   // non, lagmon, cola — boshlang‘ich mahsulot sonlari
//   constructor(non, lagmon, cola) {
//     this.non = non;       // non soni
//     this.lagmon = lagmon; // lagmon soni
//     this.cola = cola;     // cola soni
//   }

//   // Hozirgi vaqtni olish uchun oddiy method
//   time() {
//     const now = new Date();           // hozirgi vaqtni oladi
//     return now.getHours() + ":" + now.getMinutes(); 
//     // masalan: 20:40
//   }

//   // Qoldiqni ko‘rsatadigan method
//   qoldiq() {
//     // Mahsulotlarning hozirgi holatini text qilib qaytaradi
//     return `hozir ${this.time()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
//   }

//   // Sotish methodi
//   sotish(mahsulot, soni) {
//     // this[mahsulot] — masalan this["non"] → this.non
//     this[mahsulot] -= soni; // sotilgan mahsulot sonini kamaytiradi

//     // Sotish bo‘lgani haqida log chiqaradi
//     console.log(`hozir ${this.time()}da ${soni}ta ${mahsulot} sotildi`);
//   }

//   // Qabul qilish methodi
//   qabul(mahsulot, soni) {
//     // Keltirilgan mahsulot sonini qo‘shadi
//     this[mahsulot] += soni;

//     // Qabul qilinganini log qiladi
//     console.log(`hozir ${this.time()}da ${soni}ta ${mahsulot} qabul qilindi`);
//   }
// }


// const shop = new Shop(4, 5, 2);

// console.log(shop.qoldiq());

// shop.sotish("non", 3);
// shop.qabul("cola", 4);

// console.log(shop.qoldiq());





