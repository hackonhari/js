// fetch('todos/hari.json').then((response)=>{
// // console.log(response);
// return response.json();
// }).then(data=>{
//     console.log(data);
// }).catch((err)=>{
// console.log('rejected',err);
// })


// async and wait-for more readable way

// const getTodos=async()=>{ //aysnc return promise like resolved or reject

// const response=await fetch('todos/hai.json');
//  //wait until fetch resolved the value and then assign it to response
//  if(response.status!==200){
//      throw new Error("cannot fetch the data");
//  }
//  const data=await response.json();
//  return data;
// };


// getTodos()
// .then((data)=>{console.log('resolved datas:',data)})
// .catch((err)=>{console.log('rejected:',err.message)});

// fetch('todos/krsh.json').then((response)=>{
// return response.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log('so sad',err);
// })


