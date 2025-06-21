const a965_header_hammenu = document.querySelector('.a965_header_hammenu');

const off_screen_menu = document.querySelector('.off_screen_menu');

a965_header_hammenu.addEventListener('click', () => {
    a965_header_hammenu.classList.toggle('active');
    off_screen_menu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})

