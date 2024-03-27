document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelector('.menu').classList.remove('show');
    }
});