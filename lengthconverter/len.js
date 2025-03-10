function convert(){
    const cmvalue = Number(document.getElementById("input").value)
     const inchvalue = cmvalue/2.54
      const result1 =document.getElementById("result")
    result1.innerHTML=inchvalue.toFixed(2)+"inches" }




    