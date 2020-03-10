//set data in local storage

localStorage.setItem('name','hari');

localStorage.setItem("age",21);

//get item from local storage

// let name=localStorage.getItem('name');

console.log(name);

localStorage.removeItem('name');

localStorage.clear();

const todos=[
    {
        text:"play mariokart",
        author:"hari"
    },
    {
        text:"play mario",
        author:"hari"
    },
    {
        text:"mariokart",
        author:"hari"
    }
]

localStorage.setItem('todos',JSON.stringify(todos));

const stored=localStorage.getItem('todos');

console.log(JSON.parse(stored));