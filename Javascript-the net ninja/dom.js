// const para=document.querySelector('body > div.error');

// console.log(para);

// const paras=document.querySelectorAll('p');
// const errors=document.querySelectorAll('.error'); //nodelist arrow function can be used
// paras.forEach(para => {
//     console.log(para);
// });
// console.log(errors);

// get element by id
// const title=document.getElementById('page-title');
// console.log(title);
// //get element by classname
// const errors=document.getElementsByClassName('error')
// console.log(errors[0]);

// errors.forEach(error => {
//     console.log(error)   //for each is not used for html collection
// });

// get elements by tag name

// const paras=document.getElementsByTagName('p');
// // console.log(paras[1]);

// const para=document.querySelector('p');

// console.log(para.innerText);

// para.innerText +='ninja are awesome';

// const paras=document.querySelectorAll('p');

// paras.forEach(para=>{
//     console.log(para.innerText);
//     para.innerText +='hari';
// })

// const content=document.querySelector('.content');

// // content.innerHTML +='<h2>hai</h2>'

// const people=['hari','krisj','malare'];


// people.forEach(person=>{
// content.innerHTML += `<p>${person}</p>`
// })

// const link=document.querySelector('a');

// console.log(link.getAttribute('href'))

// link.setAttribute('href','www.facebook.com')

// link.innerText='faceboook'

// const msg=document.querySelector('p');

// console.log(msg.getAttribute('class'));

// msg.setAttribute('class','success');
// msg.setAttribute('style','color:red')

// const style=document.querySelector('h1');

// style.setAttribute('style','margin:50px');

// console.log(style.style);
// console.log(style.style.color);

// style.style.color='red';
// style.style.margin='50px';
// style.style.margin='';

// const content=document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error')
// content.classList.add('success');

// const paras=document.querySelectorAll('p');

// paras.forEach(para=>{
//     if(para.textContent.includes('error')){
//         para.classList.add('error')
//     }
//     if(para.textContent.includes('success')){
//         para.classList.add('success')
//     }
// })

// const title=document.querySelector('.title');

// title.classList.toggle('test');
// title.classList.toggle('test');

// const article=document.querySelector('article');

// console.log(article.children);

// Array.from(article.children).forEach((child)=>{
//     child.classList.add('article-element');
// })

// const title=document.querySelector('h2');
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling.parentElement.children);

// const ul=document.querySelector('ul');

// const button=document.querySelector('button');
// button.addEventListener('click',()=>{
//     const li=document.createElement('li');
//     li.textContent ='something new todo';
//     ul.prepend(li);
// })
// ul.remove();


// const items=document.querySelectorAll('li');

// items.forEach(item=>{
//     item.addEventListener('click',(e)=>{
//         console.log("event in li");
//         e.
//         // e.target.style.textDecoration='line-through';
// e.target.remove();

//     });
// })

// ul.addEventListener('click',e=>{
//     // console.log(e.target);
// if(e.target.tagName==="li"){
//     e.target.remove();
// }
// });

// const copy=document.querySelector('.copy-me');

// copy.addEventListener('copy',()=>{
//     console.log('dont copy');
// });

// const box=document.querySelector('.box');

// box.addEventListener('mousemove',e=>{
//     // console.log(e);
//     // console.log(e.offsetX,e.offsetY);
//     box.textContent=`x-pos${e.offsetX} y-pos${e.offsetY}`
// });

// document.addEventListener('wheel',e=>{
//     console.log(e.pageX,e.pageY);
// });

