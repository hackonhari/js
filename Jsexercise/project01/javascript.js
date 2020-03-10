var ul=document.getElementById('list')
var li;
var addButton=document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton=document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

function addItem(){
var input=document.getElementById('input')
var item=input.value;
ul=document.getElementById('list')
var textnode=document.createTextNode(item)
if(item==='') {
    alert('please enter todo')
}else{
    //create li
    li=document.createElement('li')
    //create checkbox
    var checkBox=document.createElement('input')
    checkBox.type='checkbox';
    checkBox.setAttribute('id','check')
    //create label
    var label=document.createElement('label');
 
    //add these element on web page
    ul.appendChild(label);
    console.log(label)
    li.appendChild(checkBox);
    console.log(checkBox)
     label.appendChild(textnode)
     console.log(textnode)
    li.appendChild(label);
    console.log(label)
    ul.insertBefore(li,ul.childNodes[2]);
   setTimeout(() => {
    li.className='visual'
   }, 10);
    input.value=''

}
}
function removeItem(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}  
