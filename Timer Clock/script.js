let hours=0;
let minutes=0;
let seconds=0;
let timer=null;
let hoursEl=document.getElementById("hours");
let minsEl=document.getElementById("mins");
let secsEl=document.getElementById("secs");
function updateDisplay(){
minsEl.innerHTML=minutes.toString().padStart(2,'0');
secsEl.innerHTML=seconds.toString().padStart(2,'0');
if(hours>0)
{    
    hoursEl.innerHTML=hours.toString().padStart(2,'0');
    hoursEl.style.display="inline";
    minsEl.previousSibling.textContent=":";}
else{ hoursEl.style.display="none";
    minsEl.previousSibling.textContent="";}}
    function stopwatch(){
        seconds++;
        if(seconds==60)
        {minutes++;
            seconds=0;
        }
        if(minutes==60){hours++;
            minutes=0;
        }
        updateDisplay();
    }
function start(){
    if(timer!==null)return;
    timer=setInterval(stopwatch,1000);
}
function stop(){
    clearInterval(timer);
    timer=null;
}
function reset(){
    clearInterval(timer);
    timer=null;
    minutes=0;
    seconds=0;
    hours=0;
    updateDisplay();
}
