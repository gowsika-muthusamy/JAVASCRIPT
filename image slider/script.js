const container=document.querySelector('.container')
const btns=document.querySelectorAll('.btn')
const imglist=["nature1","nature2","nature3","nature4"]
let index=0;
btns.forEach((button)=>{
button.addEventListener('click',()=>{
if(button.classList.contains('btn-left')){
index--;
if(index<0)
    index=imglist.length-1;
}
else{
index++;
if(index===imglist.length)
    index=0;
}
container.style.background=`url("/images/${imglist[index]}.jpeg") center/cover no-repeat`

})


})


