let iAmGlobal='somevalue'
if(true){
var iamLocal='somemorevalue'
    iAmGlobal='superman';
    console.log(iAmGlobal);
    console.log(iamLocal);
    
}
console.log(iAmGlobal);
console.log(iamLocal);

// //kings problem
// let king='john'
// if(true){
//     //let king='sam'
//     if(true){
//         let king='Ram'
//         console.log(king);
        
//     }
// }
// if(true){
//     console.log("Iam second part"+king);
// }