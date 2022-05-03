const bars = document.querySelector(".fa-bars-staggered");
const navbar = document.querySelector(".navbar_mobile");
const cross = document.querySelector(".fa-xmark");

bars.addEventListener('click', ()=>{
    navbar.style.width = '240px';
});

cross.addEventListener('click', ()=>{
    navbar.style.width = '0';
});


window.addEventListener('scroll', ()=>{
    const header = document.querySelector("header");
    header.classList.toggle('scrolling-activte', window.scrollY > 0);
})