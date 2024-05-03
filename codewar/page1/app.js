let x = +prompt("Son kiriting");
let y = +prompt("Son kiriting");

function calculator() {
     if(x > y) {
          document.write("win")
     }
     else if (x < y) {
          document.write("loss");
     }
     else if(x == y) {
          document.write("tie")
     }
     else {
          document.write("error")
     }
}
calculator()