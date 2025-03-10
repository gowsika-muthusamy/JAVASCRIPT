   function febrate(){
    rate=0
    const units = Number(document.getElementById("input").value)
{if(units<=50)
    rate=0.75*units
else if(units>50&&units<=150)
    rate=50*0.75+(units-50)*1
else if(units>150&&units<=250)
    rate=50*0.75+100*1+(units-150)*1.3
else 
rate=rate=50*0.75+100*1+100*1.3+(units-250)*1.5}
      const result1 =document.getElementById("result")
    result1.innerHTML=rate.toFixed(2)+"Rs" } 
