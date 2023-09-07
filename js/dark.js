const htmlElement = document.documentElement;
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');

const switchToDarkMode = () => {
    sunIcon.classList.remove('inactive');
    moonIcon.classList.add('inactive');
    htmlElement.classList.add('dark');
};

const switchToLightMode = () => {
    sunIcon.classList.add('inactive');
    moonIcon.classList.remove('inactive');
    htmlElement.classList.remove('dark');
};

moonIcon.addEventListener('click', () => {
    switchToDarkMode();
    localStorage.setItem('mode', 'dark');
});

sunIcon.addEventListener('click', () => {
    switchToLightMode();
    localStorage.setItem('mode', 'light');
});


window.addEventListener('load', () => {
    const modoGuardado = localStorage.getItem('mode');

    if(modoGuardado === 'dark') {
        switchToDarkMode();
    } 
    else {
        switchToLightMode();
    }
});