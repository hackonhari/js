//async js-start now finish later

//example
// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log('callback function fired');  //starting here
// },1000);



// console.log(3);
// console.log(4);
//finishing here


//Http requests

//make http request to get data from the server

//we make these request to api endpoints(url like 'www.hackon.com/about')
//http request to some other server it response data in json format(like js object);


//how to make request
// const getNewTodos=(resorce)=>{
// // console.log(callback);

// return new Promise((resolve,reject)=>{

// const request=new XMLHttpRequest();


// //Value	State	Description
// // 0	UNSENT	Client has been created. open() not called yet.
// // 1	OPENED	open() has been called.
// // 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// // 3	LOADING	Downloading; responseText holds partial data.
// // 4	DONE	The operation is complete.

// request.addEventListener('readystatechange',()=>{
//     // console.log(request,request.readyState);
//     if(request.readyState===4 && request.status===200){
    
//         const data=JSON.parse(request.responseText);  //normally json is string it looks like js objects.But it is not like js object.So we want to turn real js objects
//         resolve(data) //json.parse convert json string into js object

//     }else if(request.readyState===4){
//         // console.log('could not fetch data');
//        reject("error getting resource");
//         }
//     });
    
// request.open('GET',resorce);

// request.send();
// });
// };

// getNewTodos('todos/hari.json').then((data)=>{
// console.log("promise get resolved:",data)
// }).catch((err)=>{
//     console.log("promise get rejected:",err);
// });



//promises

// const getSomething=()=>{

//     return new Promise((resolve,reject)=>{
// //   resolve('some data');
//   reject('some error');
//     })

// }
// getSomething().then((data)=>{
//     console.log(data);
// },(err)=>{
//     console.log(err);
// })

// getSomething().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// console.log(1);

// console.log(2);

// console.log(3);



// getNewTodos('todos/todos.json',(er,data)=>{
// // console.log('callback fired');
// console.log(data);
// getNewTodos('todos/krish.json',(er,data)=>{  //but it is confusable and not readablr..it is callback nesting so we use promise
//     console.log(data);
//     getNewTodos('todos/hari.json',(er,data)=>{
//         console.log(data);
//     })
// })
// });
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

                                                                                                                             
// console.log(4);

// console.log(5);



//async using promises

// console.log(0);
const getTodos=(resource)=>{

// console.log(1);
// console.log(2);
// console.log(3);
return new Promise((resolve,reject)=>{
    const request=new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        if(request.readyState===4 && request.status===200){
    
            const data=JSON.parse(request.responseText);
            resolve(data);
            // console.log(typeof data);
            // console.log(typeof request.responseText)
        } else if(request.readyState===4){
            reject("error getting resorce");
        }

    });
request.open('GET',resource);
request.send();

});


};
// console.log(4);
getTodos('todos/hari.json').then((data)=>{
    console.log('promise 1 get resolved:',data);
    return getTodos('todos/krish.json');
}).then((data)=>{
    console.log('promise 2 get resolved:',data);
    return getTodos('todos/hari.json');
}).then((data)=>{
    console.log('promise 3 get resolved:',data);
}).catch((err)=>{
    console.log("promise get errored:",err);
});
// console.log(5);

localStorage.setItem("name","hari");

localStorage.setItem("age",21);

console.log(name);