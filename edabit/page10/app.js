function sortByContent(arr) {
          function compareContent(a, b) {
         let contentA = a.toString();
         let contentB = b.toString();
 
         if (contentA < contentB) {
             return -1;
         } else if (contentA > contentB) {
             return 1;
         } else {
             return 0;
         }
     }
 
     arr.sort(compareContent);
 
     return arr;
 }
 
 let array = [5, 2, 100, 10, 9];
 console.log(sortByContent(array)); 