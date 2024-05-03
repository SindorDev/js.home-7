function satrniRaqamgaAylantirish(satr) {
     let raqam = parseInt(satr);
     if (!isNaN(raqam)) {
         return raqam;
     } else {
         return "Siz raqam emas, matn kiritdingiz.";
     }
 }
 console.log(satrniRaqamgaAylantirish("123")); 
 console.log(satrniRaqamgaAylantirish("12.3"));