//chapter-9 array method

//filter method 
// const scores=[10,30,15,25,50,40,5];

// const filteredScores=scores.filter((score)=>{
//     return score>20;     //non destructive method-does not change original value


// });
// console.log(filteredScores);

// const users=[
//     {name:"hari",
// premium:true},
// {name:"hai",
// premium:false},
// {name:"hi",
// premium:false},
// {name:"hri",
// premium:true},
// ]

// const premiumUsers=users.filter(user=> user.premium);

// console.log(premiumUsers)

//map method

// const prices=[20,10,30,25,15,40,80,5];

// const salePrices=prices.map((price)=>{
//     return price/2;
// })
// console.log(salePrices)


// const products=[
//     {name:"gold star",
// price:20},
// {name:"egg",
// price:10},
// {name:"oil",
// price:30},
// {name:"fish",
// price:100},
// {name:"chicken",
// price:50},
// {name:"mango",
// price:10},
// ]

// const saleProducts=products.map(product=>{
//     if(product.price>30){
// // product.price=product.price/2;
// // return product;

//         return {name:product.name,price:product.price/2};

//     }
//     else{
//         return product;
//     }
// })

// console.log(saleProducts);
// console.log(products);


//reduce method

// const scores=[10,20,60,40,70,90,30];
// const result=scores.reduce((acc,curr)=>{  //accumulator,current parameters
//     if(curr>50){
//         acc++;
//     }
//     return acc;
// },0);

// console.log(result);

// const scores=[
// {player:'hari',score:50},
// {player:'hai',score:30},
// {player:'hari',score:50},
// {player:'hari',score:50},
// {player:'hari',score:70},
// {player:'ri',score:60},];


// const marioTotal=scores.reduce((acc,curr)=>{
// if(curr.player==='hari'){
//     acc +=curr.score;
// }
// return acc;
// },0)
// console.log(marioTotal)


//find method

// const scores=[10,5,0,40,60,10,20,70];

// const highScore=scores.find(score=>score>50);

// console.log(firstScore);

//example 1-sorting strings

// const names=['mario','shaun','chun-li','yoshi'];

// names.sort();   ///destructive method
// names.reverse();
// console.log(names);

// const scores=[10,80,5,35,40,60,20];

// scores.sort((a,b)=>b-a);
// console.log(scores);

// const names=[{player:'hari',score:50},
// {player:'hai',score:30},
// {player:'haeeri',score:50},
// {player:'heari',score:50},
// {player:'hari',score:90},
// {player:'ri',score:60},];

// names.sort((a,b)=>{
//     if(a.score>b.score){
//         return -1;
//     }else if(b.score>a.score){
//         return 1;
//     }else{
//         return 0;
//     }
// });

// console.log(names);

// names.sort((a,b)=>b.score-a.score);

// console.log(names);

//chaining array metrhods


const products=[
    {name:"gold star",
price:20},
{name:"egg",
price:10},
{name:"oil",
price:30},
{name:"fish",
price:100},
{name:"chicken",
price:50},
{name:"mango",
price:10},
]

// const filtered=products.filter((product)=>product.price>20);

// const FilteredItem=filtered.map((product)=>{
//     return `the ${product.name} is ${product.price/2}pounds`;
// })

const promos=products
.filter((product)=>product.price>20)
.map(product=>`the ${product.name} is ${product.price/2}pounds`);
console.log(promos)

// console.log(FilteredItem);