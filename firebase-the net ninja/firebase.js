//storing data

//sql(tables,rows,columns) and nosql database(collections,documents,properties)


const list=document.querySelector('ul');

const form=document.querySelector("form");

const button=document.querySelector('button');
const addRecipe=(recipe,id)=>{
     let time=recipe.created_at.toDate();
    let html=`
    <li data-id="${id}">
      <div>${recipe.title}</div>
      <div>${time}</div>
      <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;
    list.innerHTML+=html;
}
//delete recipe
const deleteRecipe=(id)=>{
const recipes=document.querySelectorAll('li');
recipes.forEach((recipe)=>{
    if(recipe.getAttribute('data-id')===id){
        recipe.remove();
    }
})
}
//get documents
const unsub=db.collection("recipes").onSnapshot(snapshot=>{
    console.log(snapshot)
snapshot.docChanges().forEach(change=>{
    // console.log(snapshot.docChanges())
    console.log(change)
    const doc=change.doc;
    if(change.type==='added'){
        addRecipe(doc.data(),doc.id)
    }
    else if(change.type==='removed'){
        deleteRecipe(doc.id);
    }
})

})


//add documents
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const now=new Date();
    const recipe={
        title:form.recipe.value,
        created_at:firebase.firestore.Timestamp.fromDate(now)
    };
    db.collection('recipes').add(recipe).then(()=>{
        console.log("recipe  added");
    }).catch((err)=>{
        console.log(err);
    })
    form.reset();
})

//deleting data

list.addEventListener('click',(e)=>{
   if(e.target.textContent==="delete"){
       const id=e.target.parentElement.getAttribute('data-id');
       db.collection("recipes").doc(id).delete().then(()=>{
           console.log('recipe deleted')
       })
   }
    })

//unsub database changes

button.addEventListener('click',()=>{
    unsub();
    console.log('unsubscribed')
})