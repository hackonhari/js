const newTodos=[{
    title:'buy bread',
    isDone:false,
},{
    title:'go To gym',
    isDone:false,
},{
    title:'Record youtube videos',
    isDone:true, 
}
]
const findTodo=function(Todos,title){
    const titleReturned=Todos.find(function(todo,index){
        return todo.title.toLowerCase()===title.toLowerCase()
    })
    return titleReturned
}
let printme=findTodo(newTodos,'go To Gym')
console.log(printme)