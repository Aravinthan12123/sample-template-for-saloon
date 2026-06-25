/*====================================
        MOBILE MENU
=====================================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

/*====================================
      CLOSE MENU AFTER CLICK
=====================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});

/*====================================
      STICKY HEADER
=====================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#111";
        header.style.padding = "18px 10%";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";
        header.style.padding = "22px 10%";
        header.style.boxShadow = "none";

    }

});

/*====================================
      SMOOTH SCROLL
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*====================================
      ACTIVE NAVIGATION
=====================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

/*====================================
      SCROLL REVEAL
=====================================*/

const reveals = document.querySelectorAll(

    ".about, .services, .choose, .gallery, .testimonial, .contact"

);

function revealSections(){

    reveals.forEach(item=>{

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 120){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

}

reveals.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(70px)";
    item.style.transition=".8s";

});

window.addEventListener("scroll", revealSections);

revealSections();

/*====================================
      GALLERY ZOOM
=====================================*/

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

/*====================================
      BUTTON RIPPLE
=====================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transition=".35s";

button.style.transform="translateY(-6px) scale(1.04)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

/*====================================
      BACK TO TOP BUTTON
=====================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.background="#d4af37";
topBtn.style.color="#111";
topBtn.style.fontSize="20px";
topBtn.style.display="none";
topBtn.style.zIndex="999";
topBtn.style.transition=".4s";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*====================================
      IMAGE PARALLAX
=====================================*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

let offset=window.pageYOffset;

hero.style.backgroundPositionY=offset*0.5+"px";

});

/*====================================
      CONTACT FORM
=====================================*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your appointment request has been received.");

form.reset();

});

}

/*====================================
      LOADER
=====================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition=".8s";

document.body.style.opacity="1";

},100);

});

/*====================================
      CURRENT YEAR
=====================================*/

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=

`© ${new Date().getFullYear()} Blade Studio. All Rights Reserved.`;

}

/*====================================
      CONSOLE MESSAGE
=====================================*/

console.log("%cBlade Studio Website Loaded",
"color:#d4af37;font-size:18px;font-weight:bold;");