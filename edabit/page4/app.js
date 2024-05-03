
function isSymmetric(number) {
    let strNumber = number.toString();
    let reversedStrNumber = strNumber.split('').reverse().join('');
    
    if (strNumber === reversedStrNumber) {
        return true; 
         } else {
        return false; 
    }
}

console.log(isSymmetric(121)); 
console.log(isSymmetric(123)); 
console.log(isSymmetric(1221)); 
console.log(isSymmetric(1234));  