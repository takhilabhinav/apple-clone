// mobile menu toggle
const toggle = document.querySelector('.toggle');
const mobileNav = document.querySelector('header');

const lineTop = document.querySelector('.line-top');

toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});

// footer dropdown links
const footerBtns = document.querySelectorAll('.footer-btn');

footerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const singleDropdown = e.currentTarget.parentElement;
        singleDropdown.classList.toggle('show-list');
    })
})
