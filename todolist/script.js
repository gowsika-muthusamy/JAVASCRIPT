
let todos=[];
let input=document.getElementById("input")
let todo=document.getElementById("list")
window.onload=()=>{
todos=JSON.parse(localStorage.getItem('todos')) || []
todos.forEach(input => addtodo(input)
    
)

}
function display(){ 

todos.push(input.value)
console.log(todos)
addtodo(input.value);
input.value=''

}
function addtodo(input)
{ let para=document.createElement('p')
    para.innerText=input;
    todo.appendChild(para)
    localStorage.setItem('todos',JSON.stringify(todos))
para.addEventListener('click',()=>{
para.style.textDecoration='line-through'
remove(input)

})
para.addEventListener('dblclick',()=>{
todo.removeChild(para)
remove(input)

})
}
function remove(inputfordel){
 let index=todos.indexOf(inputfordel)
if(index>-1)
{todos.splice(index,1)}

localStorage.setItem('todos',JSON.stringify(todos))
}