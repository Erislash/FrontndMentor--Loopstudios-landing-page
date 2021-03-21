StartApp();
function StartApp() {
    const hamBtn = document.querySelector('#hamBtn');
    const aboutImg = document.querySelector('#aboutImg');
    

    hamBtn.addEventListener('click', activateNavMenu);





    window.addEventListener('resize', resize);
}

function activateNavMenu(){
    const hamburguer = document.querySelector('#hamburguer');
    const navigator = document.querySelector('#navigator');

    hamburguer.classList.toggle('active');
    navigator.classList.toggle('active');
}

function resize() {
    if (window.innerWidth >= 768)
        document.querySelector('#aboutImg').src = './images/desktop/image-interactive.jpg';
    else document.querySelector('#aboutImg').src = './images/mobile/image-interactive.jpg';
}