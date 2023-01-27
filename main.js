const shareicon = document.querySelector(".share");
const share2icon = document.querySelector(".share2")
const share = document.querySelector(".id");
const share2 = document.querySelector(".shareDiv")

shareicon.addEventListener("click",()=>{
    share2.style.display = 'flex';
    setTimeout(()=>{
        share2.style.display = 'none';
    },3000)
    // share2.classList.toggle('shareDiv')
})
share2icon.addEventListener("click",()=>{
    share2.style.display = 'none';
})

