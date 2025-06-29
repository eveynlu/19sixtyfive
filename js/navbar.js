function initNavbar() {
    const hamburger = document.querySelector('.a965_header_hammenu');
    const closeBtn = document.querySelector('.a965_header_hammenu.close');
    const menu = document.querySelector('.off_screen_menu');
    const body = document.body;

    hamburger.addEventListener('click', function() {
        menu.classList.add('active');
        hamburger.classList.add('active');
        body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function() {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
        body.style.overflow = '';
    });

    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
        }
    });

    menu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

document.addEventListener('DOMContentLoaded', initNavbar); 