/*
==========================================
SPAX Browser
script.js
Version 1.0
Developer: Bohe
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();

    initReveal();

    initSmoothScroll();

    initMouseGlow();

    initScreenshotHover();

    initParallax();

    initBackToTop();

});

/* =======================================
            NAVBAR
======================================= */

function initNavbar(){

    const nav=document.querySelector("nav");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>40){

            nav.style.background="rgba(8,8,8,.92)";
            nav.style.boxShadow="0 10px 35px rgba(0,0,0,.4)";
            nav.style.borderBottom="1px solid rgba(34,197,94,.15)";

        }

        else{

            nav.style.background="rgba(8,8,8,.55)";
            nav.style.boxShadow="none";
            nav.style.borderBottom="1px solid rgba(255,255,255,.05)";

        }

    });

}

/* =======================================
          REVEAL ON SCROLL
======================================= */

function initReveal(){

    const elements=document.querySelectorAll(

        ".feature-card,.eco-card,.download-box,.about-box,.screenshots img"

    );

    elements.forEach(el=>{

        el.classList.add("hidden");

    });

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(el=>observer.observe(el));

}

/* =======================================
          SMOOTH LINKS
======================================= */

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",e=>{

            const target=document.querySelector(link.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}

/* =======================================
          MOUSE GLOW
======================================= */

function initMouseGlow(){

    const glow=document.createElement("div");

    glow.id="mouseGlow";

    glow.style.position="fixed";

    glow.style.width="320px";

    glow.style.height="320px";

    glow.style.borderRadius="50%";

    glow.style.pointerEvents="none";

    glow.style.background="radial-gradient(circle,rgba(34,197,94,.15),transparent 70%)";

    glow.style.transform="translate(-50%,-50%)";

    glow.style.zIndex="-1";

    glow.style.transition="left .08s linear, top .08s linear";

    document.body.appendChild(glow);

    window.addEventListener("mousemove",e=>{

        glow.style.left=e.clientX+"px";

        glow.style.top=e.clientY+"px";

    });

}

/* =======================================
        SCREENSHOT EFFECT
======================================= */

function initScreenshotHover(){

    document.querySelectorAll(".screenshots img").forEach(img=>{

        img.addEventListener("mouseenter",()=>{

            img.style.transform="scale(1.05)";

        });

        img.addEventListener("mouseleave",()=>{

            img.style.transform="scale(1)";

        });

    });

}

/* =======================================
          PARALLAX
======================================= */

function initParallax(){

    const browser=document.querySelector(".hero-right img");

    if(!browser) return;

    window.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth-.5)*20;

        const y=(e.clientY/window.innerHeight-.5)*20;

        browser.style.transform=

        `translate(${x}px,${y}px)`;

    });

}

/* =======================================
        BACK TO TOP
======================================= */

function initBackToTop(){

    const button=document.createElement("button");

    button.innerHTML="↑";

    button.id="backTop";

    button.style.position="fixed";

    button.style.right="30px";

    button.style.bottom="30px";

    button.style.width="55px";

    button.style.height="55px";

    button.style.borderRadius="50%";

    button.style.border="none";

    button.style.cursor="pointer";

    button.style.background="#22c55e";

    button.style.color="white";

    button.style.fontSize="22px";

    button.style.display="none";

    button.style.boxShadow="0 0 25px rgba(34,197,94,.4)";

    button.style.transition=".3s";

    document.body.appendChild(button);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.style.display="block";

        }

        else{

            button.style.display="none";

        }

    });

    button.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

}

/* =======================================
      DOWNLOAD BUTTON
======================================= */

const download=document.querySelector(".download-btn");

if(download){

    download.addEventListener("mouseenter",()=>{

        download.style.transform="translateY(-3px) scale(1.03)";

    });

    download.addEventListener("mouseleave",()=>{

        download.style.transform="translateY(0) scale(1)";

    });

}

/* =======================================
      RANDOM STARS
======================================= */

const stars=document.querySelector(".stars");

if(stars){

    for(let i=0;i<120;i++){

        const star=document.createElement("div");

        star.style.position="absolute";

        star.style.width="2px";

        star.style.height="2px";

        star.style.background="white";

        star.style.opacity=Math.random();

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.borderRadius="50%";

        star.style.animation=

        `twinkle ${2+Math.random()*4}s infinite`;

        stars.appendChild(star);

    }

}

/* =======================================
      STAR ANIMATION
======================================= */

const style=document.createElement("style");

style.innerHTML=`

@keyframes twinkle{

0%{opacity:.2;}

50%{opacity:1;}

100%{opacity:.2;}

}

`;

document.head.appendChild(style);

/* =======================================
          END
======================================= */

console.log("🌌 SPAX Browser Website Loaded Successfully");
