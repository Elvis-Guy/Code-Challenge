const items =[
 { name: "Bike", price: 100},
 { name: "Tv", price: 200},
 { name: "Album", price: 10},
 { name: "Book", price: 5},
 { name: "Phone", price: 500},
 { name: "Computer", price: 1000},

];
 
var a = 0;
var sum = 0;
for (a= 0; a < 6; a++ )
{   
sum = sum + items[a].price;

}
console.log ('the price is ${sum}');
