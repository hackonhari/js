const form=document.querySelector('.signup-form');
const username=document.querySelector('#username');
const feedback=document.querySelector('.feedback');

const pattern=/^[a-zA-Z]{6,12}$/;

form.addEventListener('submit',(e)=>{

e.preventDefault();

//validation

const username=form.username.value;
const pattern=/^[a-zA-Z]{6,12}$/;

if(pattern.test(username)){
feedback.textContent="that username is valid";
}else{
feedback.textContent="username must contains letters and 6-12 character long"
}

console.log(username.value);
console.log(form.username.value);

})


// testing regex
const username='shanun';

const pattern =/^[a-z]{6,}$/;

let result=pattern.test(username);

if(result){
    console.log('regx test passed');

}
else{
    console.log("regx test failed")
}

let result=username.search(pattern);

console.log(result);

// live feedback

form.username.addEventListener('keyup',e=>{
    if(pattern.test(e.target.value)){
        form.username.setAttribute('class','success');

    }else{
        form.username.setAttribute('class','error');

    }
});