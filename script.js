// Smooth animation when scrolling

const reveals = document.querySelectorAll("section");

function revealSection(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;
        const height = window.innerHeight;

        if(top < height - 100){
            section.classList.add("active");
        }

    });

}

reveals.forEach(section=>{
    section.classList.add("reveal");
});

window.addEventListener("scroll",revealSection);

revealSection();


// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});


// Destination Card Hover Effect

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 20px 35px rgba(0,0,0,.25)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 10px 20px rgba(0,0,0,.1)";

});

});


// Package Button

const buttons=document.querySelectorAll(".package button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

alert("Booking feature will be available soon!");

});

});