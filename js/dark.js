const htmlElement = document.documentElement;
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');

moonIcon.addEventListener('click', () => {
    sunIcon.classList.remove('inactive');
    moonIcon.classList.add('inactive');
    htmlElement.classList.add('dark');
    localStorage.setItem('mode', 'dark');
});

sunIcon.addEventListener('click', () => {
    sunIcon.classList.add('inactive');
    moonIcon.classList.remove('inactive');
    htmlElement.classList.remove('dark');
    localStorage.setItem('mode', 'light');
});


window.addEventListener('load', () => {
    const modoGuardado = localStorage.getItem('mode');

    if(modoGuardado === 'dark') {
        sunIcon.classList.remove('inactive');
        moonIcon.classList.add('inactive');
        htmlElement.classList.add('dark');
    } 
    else {
        sunIcon.classList.add('inactive');
        moonIcon.classList.remove('inactive');
        htmlElement.classList.remove('dark');
    }
});