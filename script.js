document.addEventListener('DOMContentLoaded', function() {
    buildNav();
    smoothScroll();
});

function buildNav() {
    const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
    const navList = document.getElementById('nav-list');

    sections.forEach(section => {
        let listItem = document.createElement('li');
        let link = document.createElement('a');
        link.textContent = section.charAt(0).toUpperCase() + section.slice(1);
        link.href = '#' + section;
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
}

function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
