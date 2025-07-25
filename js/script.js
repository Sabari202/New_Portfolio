new WOW().init();

const menu= document.querySelector("#menu-icon");
const navlist= document.querySelector(".navlist");

menu.addEventListener("click",()=>{
    menu.classList.toggle("open");
    navlist.classList.toggle("open");
})
document.querySelectorAll(".navlist").forEach(n => n.addEventListener("click", ()=>{
    menu.classList.remove("open");
    navlist.classList.remove("open");
}))
// ACTIVE LINK
const section =document.querySelectorAll("section");
const links = document.querySelectorAll("a");

window.onscroll = ()=>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            links.forEach(link =>{
                link.classList.remove("active");
                document.querySelector("header ul li a[href*="+ id +"]").classList.add("active");
            })
        }
    })
}


// TYPED SCRIPT HOME

var typed =  new Typed(".auto-type",{
    strings: ["Software Engineer","Data Engineer","Data Analyst","Full-Stack Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
// TYPED SCRIPT FOOTER

var typed =  new Typed(".hero",{
    strings: ["Sabareeswar Senthilvel &#x2764;"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})



document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

