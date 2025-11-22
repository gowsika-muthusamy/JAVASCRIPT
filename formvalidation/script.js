let usernameinput=document.getElementById("username")
let passwordinput =document.getElementById("password")
let emailinput=document.getElementById("email")
let forminput=document.getElementById("form")
let confirmpassword=document.getElementById("confirm")
forminput.addEventListener("submit",(e)=>{

if(!checkvalid()){
console.log("error")
    e.preventDefault()}
})

function checkvalid(){
    let success=true
const username=usernameinput.value.trim()
const email=emailinput.value.trim()
const password=passwordinput.value.trim()
const confirm=confirmpassword.value.trim()

if(username=="")
   { success=false
     adderror(usernameinput,"Username cannot be empty")}
else
    addsuccess(usernameinput)

if(email=="")
    {
         success=false
         adderror(emailinput,"Enter Email")}
else if (!validemail(email))
    { success=false
        adderror (emailinput,"enter valid email")}
else
    addsuccess(emailinput)
if(password=="")
    { success=false
        adderror(passwordinput,"enter password")}
else if(password.length<8)
   { success=false
     adderror(passwordinput,"password must contain atleast 8 characters")}
else
    addsuccess(passwordinput)
if(confirm=="")
   { success=false
     adderror(confirmpassword,"enter password for confirmation")}
else if(confirm!=password){ success=false
    adderror(confirmpassword,"enter correct password")}
else
   {addsuccess(confirmpassword)}
return success
}
function adderror(element,message){
    
let inputparent=element.parentElement
let errorelement=inputparent.querySelector('.error');
errorelement.innerText=message
inputparent.classList.add('error')
inputparent.classList.remove('success')
}


function addsuccess(element){
let inputparent=element.parentElement
let errorelement=inputparent.querySelector('.error');
errorelement.innerText=''
inputparent.classList.remove('error')
inputparent.classList.add('success')
}
const validemail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };