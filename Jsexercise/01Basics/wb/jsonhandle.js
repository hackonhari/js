class User{
constructor(firstname,lastname,credits){
this.firstname=firstname
this.lastname=lastname
this.credits=credits
}
getFullName(){
    return `${this.firstname} ${this.lastname} is my fullname`


}
editName(newname) {
    const myname=newname.split(" ")
    this.firstname=myname[0]
    this.lastname=myname[1]
    console.log(myname)
}
}
const john= new User('jonh','Anderson',34)
//console.log(john)
console.log(john.getFullName())
john.editName('Johnny anderson')
console.log(john.getFullName())