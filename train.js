
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

console.log(findDoublers("hello")); 
console.log(findDoublers("abc"));   
console.log(findDoublers("bilol"));
console.log(findDoublers("+998911095081"));   
console.log(findDoublers("good"));    
// -------------------------------------- / new finished /  --------------------------------------------