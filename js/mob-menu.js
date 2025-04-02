document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeButton = document.getElementById('CloseMenu');

    menuToggle.addEventListener('click', function () {

        mobileMenu.style.display = 'flex';

        mobileMenu.style.opacity = '1';

    });

    closeButton.addEventListener('click', function () {


        mobileMenu.style.opacity = '0';

        mobileMenu.style.display = 'none';

    });
})