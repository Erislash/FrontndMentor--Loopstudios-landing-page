

document.addEventListener('DOMContentLoaded', StartApp);

function StartApp() {
    const hamBtn = document.querySelector('#hamBtn');
    const aboutImg = document.querySelector('#aboutImg');
    

    hamBtn.addEventListener('click', activateNavMenu);



    resize();
    window.addEventListener('resize', resize);
}

function activateNavMenu(){
    const hamburguer = document.querySelector('#hamburguer');
    const navigator = document.querySelector('#navigator');

    hamburguer.classList.toggle('active');
    navigator.classList.toggle('active');
}

function resize() {
    const about = document.querySelector('#about');
    const aboutImg = document.querySelector('#aboutImg');
    const aboutText = document.querySelector('#aboutText');

    if (window.innerWidth >= 768){
        document.querySelector('#aboutImg').src = './images/desktop/image-interactive.jpg';
    
        const putInPlace = () => {
            aboutText.style.transform = `translate(${parseFloat(getComputedStyle(aboutImg).width) / 1.3}px, ${parseFloat(getComputedStyle(aboutImg).height) / 2}px)`;
        
            about.style.minHeight = `${aboutText.getBoundingClientRect().top - about.getBoundingClientRect().top + aboutText.offsetHeight}px`;
        }


        const intervalPutInPlace = setInterval(() => {
            if(aboutImg.querySelector('img').complete){
                putInPlace();
                clearInterval(intervalPutInPlace);
            }
        }, 100);

        

    }
    else{
        about.removeAttribute("style");
        aboutImg.removeAttribute("style");
        aboutText.removeAttribute("style");
        document.querySelector('#aboutImg').src = './images/mobile/image-interactive.jpg';
    }


    
}