const companydrop = document.querySelector(".companydrop");
const featuresdrop = document.querySelector(".featuresdrop");
const featuresnav = document.querySelector(".featuresnav");
const companynav = document.querySelector(".companynav");
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");
const identity = document.querySelector(".identity");
const background = document.querySelector(".background");

featuresnav.addEventListener("mouseover", e=>{
    e.preventDefault();

    featuresdrop.classList.toggle("hide");
})

hamburger.addEventListener("click", e=>{
    e.preventDefault();
    hamburger.classList.toggle("open");
    identity.classList.toggle("show");
    navlinks.classList.toggle("show");
    background.classList.toggle("show");
})

companynav.addEventListener("mouseover",e=>{
    e.preventDefault();

    companydrop.classList.toggle("hide")
})