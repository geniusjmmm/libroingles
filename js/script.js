const wrapper = document.getElementById("wrapper")
wrapper.addEventListener("click", e => {
  /*  console.log(e.target)*/
    const  t= e.target,
            images = Array.from(wrapper.querySelectorAll(".revisar")),
           i= images.indexOf(t),
           texts= Array.from(wrapper.querySelectorAll(".respuesta"))
    
  /*  console.log(`${i+1}`)
    console.log(images)*/
    console.log(texts[i].value)
    switch(i) {
        case 0:
            if (texts[i].value=="Hotel"){
                alert("Bingo")
            }
            break;
        case 1:
        if (texts[i].value=="fire station"){
            alert("Bingo")
        }
        break;
        case 2:
        if (texts[i].value=="rescue"){
            alert("Bingo")
        }
        break;
        
       
    }
    
})

 
