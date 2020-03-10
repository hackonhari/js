// chapter-3 control flow basics

// for(let i=0;i<5;i++){
//     console.log(i);
// }
// console.log("loop finished")

// const names=["hari","krishnan","malar"];

// //for loop
// for(let i=0;i<names.length;i++){
//     // console.log(names[i]);
//     let html=`<div>${names[i]}</div> `
//     console.log(html);
// }
 
// while loop
// const names=["hari","krishnan","malar"];
// let i=0;
// while(i<names.length){
// console.log(names[i]);
// i++;
// }

// do while
// let i=5;
// do
// {
// console.log(i);
// i++;
// }
// while(i<50);

// //if statements
// const age=20;
// if(age<30){
// console.log("you are not an uncle");
// }


// const ninjas=["hari","krishnan","malar"]

// if(ninjas.length>2){
//     console.log(" that's succes");
// }

// // const password='pas';
// if(password.length>=12){
//     console.log("strong password");
// }else if(password.length<=8){
//     console.log("that is not long enough password")
// }
// else{
//     console.log("sucess")
// }


// logical operators

// //OR -|| AND-&&
// const password="paseerreredd$"
// if(password.length>=12 && password.includes('$')){
//     console.log("strong password");
// }else if(password.length<=8 || password.includes("$")){
//     console.log("that is not long enough password")
// }
// else{
//     console.log("sucess")
// }


// logical NOT(!)
// let age=10;
// if(age!=20){
// console.log("magizhchi", age)
// }

// break and continue

// const
//  scores=[50,25,0,30,100,20,10];
// for(i=0;i<scores.length;i++){

//     if(scores[i]===0){
//         continue;
//     }
//     console.log(scores[i]);

//     // if(scores[i]===100){
//         console.log('congrats');
//         break;
//     }
// }



// switch statement

// const grade='d';

// switch(grade){

//     case 'a':
//         console.log('a');
//         break;
//     case 'b':
//         console.log('b');
//         break;
//     case 'c':
//         console.log('c');
//         break;
//     case 'd':
//         console.log('d');
//         break;
//     case 'e':
//         console.log('e');
//         break;

//     default:
//     console.log("not a valid grade");

// }


// variables and block scope


// let age =30; //global scope



// if(true){
//     let age=40; //local scope
//     let name="hari"
//     console.log('INSIDE',age,name);

//     if(true){
//         let age=50;
//         var schl="hagdsgg"// var is not suitable because it can be accessed outside the block scope
//         console.log(age);
//     }
// }
// console.log('OUTSIDE',age,name,schl)


// chapter-4 function & methods



// greet();
// greet();
// greet();

// speak();

// //function expression but it is not hoisted(so it is best)
// const speak=function(){

//     console.log('good day');
// };

// //function declaration has an hoisting

// function greet(){
//     console.log("hai")  //this is called hoisting
//     }

// const speak=function(name='hari',time='night'){   //parameters
// console.log(`good ${time} ${name}`)

// };
// speak();
// speak('hari','morninghs'); //argument-the value we pass

// returning values

// const calArea=function(radius){
// return 3.14*radius**2;
    
// }

// const area=calArea(3);
// console.log(area);

// arrow function

// const calArea=radius=>3.14*radius**2; //for one parameter no need paranthesis no paramter()..one line return no need return curly braces

// const area=calArea(3);
// console.log(area);

// const greet=()=>'hello,world';

// console.log(greet());

// const bill=(products,tax)=>{
//     let total=0;
//     for(let i=0;i<products.length;i++){
//         total +=products[i]+products[i]*tax;
//     }
//     return total;
// }

// console.log(bill([10,15,30],0.2));


// methods it is a function

// const name="hari";

// //function
// const greet=()=>"hello";

// let result=greet();
// console.log(result);
// //methods they do something for us

// let resultone=result.toUpperCase();
// console.log(resultone);

// callbacks &foreach
// const myFunc=(callbackFunc)=>{

//     let value=50;
//     callbackFunc(value);
// };
// myFunc((value)=>
//     console.log(value)
//     );

// let people=['mario','luigi','rye','shaun','chaunb-li'];

// const logPerson=(person,index)=>{
// console.log(`${index}-hello ${person}`)
// }
// people.forEach(logPerson); //callback function are normal function which is passed as a argument into other function

// get a reference to the ul

// const ul=document.querySelector(".people");

// const people=['mario','luigi','rye','shaun','chaunb-li'];

// let eachElement=``;
// people.forEach((person)=>
//     //create html template
//     eachElement +=`<li style="color:purple">${person}</li>`
// )
// console.log(eachElement);

// ul.innerHTML=eachElement;

// chapter-5 object literals

// let user={
//     name:'crystal',
//     age:30,
//     email:"krishnanh601@gmail.com",
//     location:'kanchipuram',
//     blogs:['why mac & cheese rules','hai im hari'],
//     login:function(){
//         console.log('user logged in');
//     },
//     logout:function(){
//         console.log('logout');
//     },
//     logBlogs(){
//     // console.log(user.blogs);
//     console.log('this user has written following blogs');
//     this.blogs.forEach((blog)=>{
//         console.log(blog);
//     })
//     }
// };

// user.logBlogs();

// chapter-6-document object model

