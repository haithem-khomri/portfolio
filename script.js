const settings = document.querySelector(".stng");
const switcher = document.querySelector(".live-switcher");
const colors = document.querySelectorAll(".ult-clr")
settings.addEventListener("click",()=>{
    switcher.classList.toggle("open");
}
)
window.addEventListener("scroll",()=>{
 if (switcher.classList.contains("open")){
    switcher.classList.remove("open")
 }
})

// darkmode
const dark = document.querySelector(".moon");
dark.addEventListener("click",()=>{
    dark.querySelector("i").classList.toggle("fa-sun")
    dark.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark"))
    {
        dark.querySelector("i").classList.add("fa-sun")
    }else{
        dark.querySelector("i").classList.add("fa-moon")
    }
})

// colors
function setActiveStyle(color){
    colors.forEach((style)=>{
        if (color===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}

//typing part
const type = new Typed(".profition",{
    strings:["front designer","flutter designer","basket-baller","web designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
});