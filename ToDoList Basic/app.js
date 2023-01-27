const addtodo = document.querySelector('.adder');
const addItem = document.querySelector('ul');
const del=document.querySelector('.delete');
const plus=document.querySelector('.plus');
const searchItem=document.querySelector('.find');
const lItems=addItem.children;
const box=document.querySelector('.addBox');
//

console.log(Array.from(addItem.children).length)
function emptyBox(){
    if((Array.from(addItem.children).length<1)){
        box.style.display="flex";
    }
    else{
        box.style.display="none";
    }
}


//


// html tempelate to add


const htmlTemp =(todo)=>{
    const html=`
    <li class="list-group-item d-flex justify-content-between align-item-center px-4 py-3 my-2">
                <span class="font-weight-bold fs">${todo}</span>
                <span>
                <i class=" delete fa-solid fa-trash-can "></i>
                </span>
            </li>
            `;
    addItem.innerHTML += html;
};

searchItem.addEventListener('submit',e=>
{
    e.preventDefault();
})

//add item

addtodo.addEventListener('submit', e => {

    e.preventDefault();
    const todo= addtodo.add.value.trim();
    if(todo!=0)
    {
        console.log(todo);
        htmlTemp(todo);
        emptyBox();

    }
    else{
        console.warn('no text found');
    }
    addtodo.reset();
    
    
     });
plus.addEventListener('click', e => {

    e.preventDefault();
    const todo= addtodo.add.value.trim();
    if(todo!=0)
    {
        console.log(todo);
        htmlTemp(todo);

    }
    else{
        console.warn('no text found');
    }
    addtodo.reset();
    emptyBox();
})



// //Delete Item.
addItem.addEventListener('click', e=>{
    console.log("delete");
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        emptyBox();
    }
});
// del.addEventListener('click',e=>{
//     console.log(e.target);
//     del.parentElement.parentElement.remove();
// });

//search
const filterItem = (toSearch)=>{
    console.log(lItems);
    Array.from(lItems)
    .filter((lItems)=>
        !lItems.textContent.toLowerCase().includes(toSearch)).forEach((lItems)=>{
            lItems.classList.add('filtered')
            lItems.classList.remove('d-flex')
        });

    Array.from(lItems)
    .filter((lItems)=>
        lItems.textContent.toLowerCase().includes(toSearch)).forEach((lItems)=>{
            lItems.classList.remove('filtered')
            lItems.classList.add('d-flex')
        });
};

searchItem.addEventListener('keyup',e=>{
    const toSearch = searchItem.search.value.trim().toLowerCase();
    filterItem(toSearch);
});

//no task 






