const button=document.querySelector("button")
button.addEventListener("click",() =>{randomimages()})

function randomimages(){
    const photo_section=document.getElementById("photo-section")
    for (let index = 0; index < 5; index++) {
        
        const random=Math.floor(Math.random()*100)
        const img = document.createElement("img")
        img.src=`https://picsum.photos/${random}`
        img.alt="photo here"
        photo_section.appendChild(img)
    
    
    }
    
}



