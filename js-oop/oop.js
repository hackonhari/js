//object has properties and methods

//two way of creating arrays

// const names=['hari','krish','malar']
// console.log(names);

// const ages=new Array(19,22,21); //array constructor
// console.log(ages);

// //two ways of creating objects

// const userOne={
//     names:"hari krishnan",
//     age:20
// }

// const userTwo=new Object({names:"hari",
// age:20})

// console.log(userOne,userTwo)


//js wraps the string((primitive value like number,boolean) into wrapper object,then we 
//can apply the method,properties,then it unwrap the primitive values

//new Boolean(true)
//new Number(5);
//new String("hari")



//normal object literal notation

// const userOne={
// username:"hari",
// email:"hackonhari@gmail.com",
// login(){
//     console.log("user logged in")
// },
// logout(){
//     console.log("user logged out");
// }
// };

//the new keyword
//1.it creates a new empty object{}
//2.it binds the value of this to the new empty object
//3.it calls the constructor function to build  the object


// console.log(userOne.email,userOne.username);
// userOne.login();

// const userTwo={
//     username:"hari krishnan",
//     email:"hari@gmail.com",
//     login(){
//         console.log("user logged in")
//     },
//     logout(){
//         console.log("user logged out");
//     }
//     };

//     console.log(userTwo.email,userTwo.username);
//     userTwo.login();


    //we are repeating the code for every user 
    //it is useful only they are minimum objects

    //object oriented programming

    //classes

//release of ES6 we can use classes


//class is a blueprint for object like properties and functionality

// class User{
// constructor(username,age){ //CONSTRUCTOR CONSTRUCT THE OBJECT AND SET THE PROPERTIES TO THE OBJECT
// this.username=username;//property
// this.age=age;

// }
// login(){
//     console.log(`${this.username} logged in`)
//     return this;
// } 
// logout(){
//     console.log(`${this.username} logged out`)
//     return this                             
// }
// }
// //inheritance or subclass-it extends other class


// class Admin extends User{
//     constructor(username,age,hobby){
//         super(username,age) //when we call it looks for parent constructor
//         this.hobby=hobby;
//     }
//     deleteUser(user){
//         users=users.filter((u)=>u.username !==user.username);
//     }
//     }
// const userOne=new User("mario",19)  //instance refers to the individual object
// const userTwo=new User('hari',21)
// const admin=new Admin('malar',20,'reading books')

// console.log(admin)

// console.log(userOne,userTwo,admin)
// let users=[userOne,userTwo,admin];
// console.log(users)
// admin.deleteUser(userTwo)

// console.log(users);

// admin.deleteUser(userOne)
// console.log(users);

// userOne.login();
// userTwo.logout();

// userOne.login().logout();   //to use class chaining method then we have to return the object instance which is "this"


//without using class and having constructor

function User(username,age){  //constructor
this.username=username;
this.age=age;
this.login=function(){   //login method is not added to the proto
    console.log(`${this.username} has logged in`)
};

}

User.prototype.login=function(){
    console.log(`${this.username} has logged in`);
    return this;
}

User.prototype.logout=function(){
    console.log(`${this.username} has logged out`);
    return this;
}
//prototype inheritance

function Admin(username,age,hobby){
User.call(this,username,age);
this.hobby=hobby;

}

Admin.prototype=Object.create(User.prototype)

Admin.prototype.deleteuser=function(){
    //dlecte user
}
//evry object in js has a prototype
//prototype has all method for that object type like date,array,etc
//all methods are stored in the proto


const userOne=new User("hari",20);
const userTwo=new User("hackon",20);
const userThree=new Admin("malar",22,'books');

console.log(userOne,userTwo,userThree)

// userOne.login().logout();
// userOne.logout().login();

