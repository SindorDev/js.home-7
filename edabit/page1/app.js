function descendingOrder(number) {
     let digits = number.toString().split('');
     
     digits.sort(function(a, b) {
         return b - a;
     });
     
     let result = parseInt(digits.join(''));
     
     return result;
 }
 console.log(descendingOrder(123));
 console.log(descendingOrder(8479564)); 