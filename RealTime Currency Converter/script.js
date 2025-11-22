git 
let select=document.querySelectorAll('.currency')
let btn=document.getElementById('btn')
let input=document.getElementById('input')
let error=document.getElementById('error')
let result=document.getElementById('result')
console.log(select)
fetch('https://api.frankfurter.app/currencies').then(res=>res.json()).then(res=>displayDropDown(res))

function displayDropDown(res){

     let curr=Object.entries(res)///convert it into array
for(let i=0;i<curr.length;i++)
{
    let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`//we can get all the option values as the currency
select[0].innerHTML += opt
select[1].innerHTML += opt
}}
input.addEventListener('input',()=>{
let updateval= "right";
let inputval=input.value;
let curr1=select[0].value
let curr2=select[1].value
error.innerHTML="";
if(curr1==curr2)
    error.innerHTML="<p>No same values</p>"
else 
    convert(curr1,curr2,inputval,updateval)
})
result.addEventListener('input',()=>{
let updateval= "left";
let inputval=result.value;
let curr1=select[0].value
let curr2=select[1].value
error.innerHTML="";
if(curr1==curr2)
    error.innerHTML="<p>No same values</p>"
else 
    convert(curr2,curr1,inputval,updateval)
})
function convert(curr1,curr2,inputVal,updateval){
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => { if(updateval=="right"){
    document.getElementById('result').value = Object.values(data.rates)[0]}
    else
    { document.getElementById('input').value = Object.values(data.rates)[0]}
  });}