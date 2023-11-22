const btnNext = document.getElementById("btn-next")
const hiddenElements = document.querySelectorAll(".hiddenF")
const viewedElements = document.querySelectorAll(".viewF")

btnNext.addEventListener("click", ()=>{
    
    viewedElements.forEach(element =>{
        element.style.display = "none"
    })
    hiddenElements.forEach(element =>{
        if (window.getComputedStyle(element).display === "none") {
            element.style.display = "flex"
            
        }else{
            element.style.display = "none";
        }
    })
    
})