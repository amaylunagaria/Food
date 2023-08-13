const listMenu = document.querySelector('#listMenu');
const menu = document.querySelector('#menu');

listMenu.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});