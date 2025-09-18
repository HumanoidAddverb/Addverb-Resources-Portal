const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const icon = document.getElementById('icon');
sec = document.getElementsByClassName('section-main');
menu = document.getElementsByClassName('menu-button');
img = document.getElementById('doc-image');
const mode_icon = document.getElementById('mode-icon');

if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
    img.src="doc-portal-b.png";
    mode_icon.classList.replace('fa-moon', 'fa-sun');
    
    for(i=0; i<3;i++){
        sec[i].classList.add('dark-mode');
        menu[i].classList.add('dark-mode');
    }
}
else{
    img.src="doc-portal-w.png";
}
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    for(i=0; i<3;i++){
        sec[i].classList.toggle('dark-mode');
        menu[i].classList.toggle('dark-mode');
    }

    if (body.classList.contains('dark-mode')) {
        mode_icon.classList.remove('fa-moon');
        mode_icon.classList.add('fa-sun');
        localStorage.setItem('mode', 'dark');

        img.src="doc-portal-b.png";
    } else {
        mode_icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('mode', 'light');
        img.src="doc-portal-w.png";
    }
});
