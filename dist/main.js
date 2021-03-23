

document.addEventListener('DOMContentLoaded', StartApp);

function StartApp() {
    const hamBtn = document.querySelector('#hamBtn');
    

    hamBtn.addEventListener('click', activateNavMenu);



    resize();
    window.addEventListener('resize', resize);
}

function activateNavMenu(){
    const head = document.querySelector('#head');
    const hamburguer = document.querySelector('#hamburguer');
    const navigator = document.querySelector('#navigator');

    
    hamburguer.classList.toggle('active');
    navigator.classList.toggle('active');

    setTimeout(() => {
        head.classList.toggle('active');
    }, 100);
}

function resize() {
    const about = document.querySelector('#about');
    const aboutImg = document.querySelector('#aboutImg');
    const aboutText = document.querySelector('#aboutText');

    let imagesPath = './images/desktop/';


    const images = {
        deepEarth: [document.querySelector('#deepEarth'), 'image-deep-earth.jpg'],
        arcadeImg: [document.querySelector('#arcadeImg'), 'image-night-arcade.jpg'],
        soccerImg: [document.querySelector('#soccerImg'), 'image-soccer-team.jpg'],
        racingImg: [document.querySelector('#racingImg'), 'image-grid.jpg'],
        roadImg: [document.querySelector('#roadImg'), 'image-from-above.jpg'],
        auroraImg: [document.querySelector('#auroraImg'), 'image-pocket-borealis.jpg'],
        curiosityImg: [document.querySelector('#curiosityImg'), 'image-curiosity.jpg'],
        fishEyeImg: [document.querySelector('#fishEyeImg'), 'image-fisheye.jpg']
    }

    if (window.innerWidth >= 768){
        imagesPath = './images/desktop/';
        aboutImg.src = imagesPath + 'image-interactive.jpg';

        for(let image in images) {
            images[image][0].src = imagesPath + images[image][1];
        }

    
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
        imagesPath = './images/mobile/';
        for(let image in images) {
            images[image][0].src = imagesPath + images[image][1];
        }

        about.removeAttribute("style");
        aboutImg.removeAttribute("style");
        aboutText.removeAttribute("style");
        aboutImg.src = imagesPath + 'image-interactive.jpg';
    }


    
}