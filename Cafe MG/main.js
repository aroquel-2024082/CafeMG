let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

let currentIndices = {};
let intervals = {};

function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    const slider = modal.querySelector('.slider');
    const slides = modal.querySelectorAll('.slide');
    const dotsContainer = modal.querySelector('.dots-container');

    modal.classList.add('show');
    currentIndices[modalId] = 0;

    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(modalId, index));
        dotsContainer.appendChild(dot);
    });

    updateSlider(modalId);

    intervals[modalId] = setInterval(() => nextSlide(modalId), 3000);

    modal.querySelector('.slider-container').addEventListener('click', () => {
        clearInterval(intervals[modalId]);
    });
    }

    function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    clearInterval(intervals[modalId]);
    }

    function updateSlider(modalId) {
    const modal = document.getElementById(modalId);
    const slider = modal.querySelector('.slider');
    const slides = modal.querySelectorAll('.slide');
    const index = currentIndices[modalId];

    slider.style.transform = `translateX(-${index * 100}%)`;

    const dots = modal.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    }

    function nextSlide(modalId) {
    const modal = document.getElementById(modalId);
    const slides = modal.querySelectorAll('.slide');
    currentIndices[modalId] = (currentIndices[modalId] + 1) % slides.length;
    updateSlider(modalId);
    }

    function prevSlide(modalId) {
    const modal = document.getElementById(modalId);
    const slides = modal.querySelectorAll('.slide');
    currentIndices[modalId] = (currentIndices[modalId] - 1 + slides.length) % slides.length;
    updateSlider(modalId);
    }

    function goToSlide(modalId, index) {
    currentIndices[modalId] = index;
    updateSlider(modalId);
    clearInterval(intervals[modalId]);
    }

    window.onclick = function (e) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) {
        modal.classList.remove('show');
        clearInterval(intervals[modal.id]);
        }
    });
    }

    window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
        modal.classList.remove('show');
        clearInterval(intervals[modal.id]);
        });
    }
});