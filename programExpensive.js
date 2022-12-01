const items =[
    { name: "Bike", price: 100},
    { name: "Tv", price: 200},
    { name: "Album", price: 10},
    { name: "Book", price: 5},
    { name: "Phone", price: 500},
    { name: "Computer", price: 1000},
   
   ];
    
   var a = 1;
   var b = 0;
   one = items[0].price;
   
   while (a < 6){
       if (items[a].price > one ){
                b = a;
                   a++;
       }
       else {
           
           a++;
       }    
      }
      console.log(`The expensive item  is ${items[b].name} and it costs ${items[b].price`);
