function arr(value, index, array) {
     return array.indexOf(value) === index;
   }
   let a = ['a', 1, 'a', 2, '1'];
   let result = a.filter(arr);
   
   document.write(result);