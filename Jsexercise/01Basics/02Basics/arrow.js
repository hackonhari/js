// const sayHello=(name) =>`hey there ${name}`
// console.log(sayHello('sammy'))

const todos=[{
    title:'buy bread',
    isDone:true,
},{
    title:'go To gym',
    isDone:false,
},{
    title:'Record youtube ',
    isDone:false,
},
{
    title:'buy bajji',
    isDone:true,
},{
    title:'go To temple',
    isDone:true,
},{
    title:'Record  videos',
    isDone:false,
}
]

const notDone=todos.filter(function(todo){
    return todo.isDone===false

});
notDone.forEach(function(name){
    return console.log(name.title)
})
