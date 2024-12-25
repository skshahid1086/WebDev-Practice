let inputElem = document.getElementById('todo-input');
let addBtn = document.querySelector('.btn');
let pElem = document.querySelector('.element');

const todo = ()=>{
    console.log(inputElem.value);
    let todoElem = document.createElement('p');
    todoElem.innerText=inputElem.value;
    console.log(todoElem);
    pElem.append(todoElem);
    inputElem.value = "";
};

addBtn.addEventListener("click", ()=>{
    todo();
});

pElem.addEventListener('click',(event)=>{
    let eTar = event.target;
    eTar.remove();
})