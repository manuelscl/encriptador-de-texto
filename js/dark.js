const htmlElement = document.documentElement;
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');

moonIcon.addEventListener('click', () => {
    sunIcon.classList.remove('inactive');
    moonIcon.classList.add('inactive');
    htmlElement.classList.add('dark');
});

sunIcon.addEventListener('click', () => {
    sunIcon.classList.add('inactive');
    moonIcon.classList.remove('inactive');
    htmlElement.classList.remove('dark');
});
