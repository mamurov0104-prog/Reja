// Shop degan class yaratamiz
class Shop {

  // constructor — classdan object yaratilganda ishga tushadi
  // non, lagmon, cola — boshlang‘ich mahsulot sonlari
  constructor(non, lagmon, cola) {
    this.non = non;       // non soni
    this.lagmon = lagmon; // lagmon soni
    this.cola = cola;     // cola soni
  }

  // Hozirgi vaqtni olish uchun oddiy method
  time() {
    const now = new Date();           // hozirgi vaqtni oladi
    return now.getHours() + ":" + now.getMinutes(); 
    // masalan: 20:40
  }

  // Qoldiqni ko‘rsatadigan method
  qoldiq() {
    // Mahsulotlarning hozirgi holatini text qilib qaytaradi
    return `hozir ${this.time()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
  }

  // Sotish methodi
  sotish(mahsulot, soni) {
    // this[mahsulot] — masalan this["non"] → this.non
    this[mahsulot] -= soni; // sotilgan mahsulot sonini kamaytiradi

    // Sotish bo‘lgani haqida log chiqaradi
    console.log(`hozir ${this.time()}da ${soni}ta ${mahsulot} sotildi`);
  }

  // Qabul qilish methodi
  qabul(mahsulot, soni) {
    // Keltirilgan mahsulot sonini qo‘shadi
    this[mahsulot] += soni;

    // Qabul qilinganini log qiladi
    console.log(`hozir ${this.time()}da ${soni}ta ${mahsulot} qabul qilindi`);
  }
}


const shop = new Shop(4, 5, 2);

console.log(shop.qoldiq());

shop.sotish("non", 3);
shop.qabul("cola", 4);

console.log(shop.qoldiq());