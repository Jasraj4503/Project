const openbtn = document.getElementById("open_btn")
const navmenu = document.getElementById("slide")

if (openbtn) {
    openbtn.addEventListener('click', ()=>{
       navmenu.classList.toggle("active")
    })
}

// changing Icon on Click
const changeIcon = function(icon) {
    icon.classList.toggle('fa-x')
}