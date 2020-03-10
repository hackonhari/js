// dates and times
// const now=new Date();

// console.log(now);

// //year,months,day,times
// console.log('getFullYear:',now.getFullYear());
// console.log('getDay:',now.getDate());
// console.log('getHours:',now.getHours());
// console.log('getMinutes:',now.getMinutes());

//timestamps

// console.log('timestamp:',now.getTime());

// console.log(now.toDateString());
// console.log(now.toLocaleString());
// const before=new Date('feburary 1 2019 7:30:59');
// const now=new Date();

// // console.log(now.getTime(),before.getTime());
// const diff=now.getTime()-before.getTime();
// console.log(diff);
//  const mins=Math.round(diff/1000/60);


//  const hours=Math.round(mins/60);
//  const days=Math.round(hours/24);
//  console.log(hours,mins,days);
//  console.log(`the blog was written ${days} ago`);

//  //converting timestamps into dateobjects

//  const timestamp=22552027194;
//  console.log(new Date(timestamp));


// const clock=document.querySelector('.clock');

// const tick=()=>{
//     const now=new Date();
//     const h=now.getHours();
//     const m=now.getMinutes();
//     const s=now.getSeconds();
//  const html=`
//  <span>${h}</span> :
//  <span>${m}</span> :
//  <span>${s}</span> 
//  `;

//  clock.innerHTML =html;
// };

// setInterval(tick,1000);

//data fns library

const now=new Date();

console.log(dateFns.isToday(now));

//formatting options

console.log(dateFns.format(now,'YYYY'));
console.log(dateFns.format(now,'dddd Do MMMM YYYY'));

//comparing dates

const before=new Date("feburary 1 2019 7:30:59");

console.log('about',dateFns.distanceInWords(now,before,{addSuffix:true}));
