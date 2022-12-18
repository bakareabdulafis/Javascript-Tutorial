const hamburger = document.querySelector(".hamburger");
const sideNav = document.querySelector(".side-nav");
const wrap = document.querySelector(".wrap");

hamburger.addEventListener('click',e => {
    e.preventDefault();
    hamburger.classList.toggle("open");
    sideNav.classList.toggle("open");
    wrap.classList.toggle("open");
})