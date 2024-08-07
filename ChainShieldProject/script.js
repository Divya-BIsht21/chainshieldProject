document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.content');

    burgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('active');
        content.style.paddingTop = navbar.classList.contains('active') 
            ? `${navbar.offsetHeight}px` 
            : '10px'; // Default padding when navbar is not active
    });

    document.querySelectorAll('.toggle-details').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const details = document.getElementById(targetId);
            const arrow = this.querySelector('.arrow');

            if (details.classList.contains('show')) {
                details.classList.remove('show');
                arrow.classList.remove('up');
            } else {
                document.querySelectorAll('.details').forEach(detail => {
                    detail.classList.remove('show');
                });
                document.querySelectorAll('.arrow').forEach(a => {
                    a.classList.remove('up');
                });
                details.classList.add('show');
                arrow.classList.add('up');
            }
        });
    });
});
