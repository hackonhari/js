const addTodo=document.querySelector('.add');

const list=document.querySelector('.todos');
const searchInput=document.querySelector(".search input");


let todosArray=[];



//search todo

const filterTodos=(term)=>{
    console.log(list.children)
   console.log( Array.from(list.children))
   Array.from(list.children)
    .filter((todo)=>!todo.textContent.toLowerCase().includes(term))

    .forEach((todo)=>todo.classList.add('filtered'));
    Array.from(list.children)
    .filter((todo)=>todo.textContent.toLowerCase().includes(term))

    .forEach((todo)=>todo.classList.remove('filtered'));
}

//keyupevent

searchInput.addEventListener('keyup',()=>{
const term=searchInput.value.trim().toLowerCase();
console.log(term);
filterTodos(term);
});




//add todo
addTodo.addEventListener('submit',(e)=>{
    e.preventDefault();
    const todo=addTodo.add.value.trim();
    todosArray.push(todo)
    localStorage.setItem("todos",JSON.stringify(todosArray));
    if(todo.length){
        generateTemplate(todo);
        addTodo.reset();
    }
    // console.log(todo);
});
generateTemplate=(todo)=>{

    const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>`;
                list.innerHTML += html;
                
                    }

    const datas=JSON.parse(localStorage.getItem("todos"))
    console.log(datas)
                                 
                                    

//delete todo

list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
e.target.parentElement.remove();
console.log(e);
const newTodoArray=datas.splice(index,2)
localStorage.setItem("todos",JSON.stringify(newTodoArray));
    }
})

datas.forEach((data)=>{generateTemplate(data)})      

//or

// const newTodo=document.createElement('li');
// const icon=document.createElement('i');

// newTodo.textContent=`${todo}`;

// newTodo.setAttribute("class","list-group-item d-flex justify-content-between align-items-center");
// icon.setAttribute("class","far fa-trash-alt delete");
// console.log(newTodo,icon);

// list.append(newTodo,icon);

