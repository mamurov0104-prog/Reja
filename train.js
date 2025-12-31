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
