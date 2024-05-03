let a = +prompt("Birinchi sonni kiriting");
let b = +prompt("Ikkinchi sonni kiriting");
let c = +prompt("uchinchi sonni kiritng");
let arr = [];

arr.push(a);
arr.push(b);
arr.push(c);

function calculator() {
     for(let i = 0; i <= c; i++) {
          if(arr[i] > c) {
              return  a + b;

          }
          else {
               console.log("Xato kiritildi")
          }
     }
}

let result = calculator();
console.log(result);