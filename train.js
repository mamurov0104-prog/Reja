// ------ eski qolib ketgan vaziga 


function raqamTop(str) {
  let count = 0;

  for (let char of str) {
    if (char >= '0' && char <= '9') {
      count++;
    //   in index uchun edi . 
    }
  }

  return count;
}


console.log(raqamTop("ad2a54y79wet0sfgb9")); 




// *******************  2 vazifa joriy -------------------

function checkContent(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sort1 = str1.split("").sort().join("");
  const sort2 = str2.split("").sort().join("");

  return sort1 === sort2;
}

checkContent("abc", "abcc");         
checkContent("bilol", "lolib");
checkContent("yaxshimisiz", "sizyaxshimi");     
checkContent("test", "test"); 

function checkContent(str1, str2) {
  if (str1.length !== str2.length) return false;

  let map = {};

  for (let ch of str1) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (let ch of str2) {
    if (!map[ch]) return false;
    map[ch]--;
  }

  return true;
}
