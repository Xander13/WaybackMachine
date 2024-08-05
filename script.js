const suggestions = [
    "Apple website in the late 2008 iPhone",
    "90's website Space Jam",
    "Google website first aired"
];

let currentIndex = 0;
let charIndex = 0;
let typingSpeed = 100; // milliseconds
const searchInput = document.getElementById('searchInput');

function typeSuggestion() {
    if (charIndex < suggestions[currentIndex].length) {
        searchInput.placeholder += suggestions[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeSuggestion, typingSpeed);
    } else {
        setTimeout(eraseSuggestion, 2000); // Pause before erasing
    }
}

function eraseSuggestion() {
    if (charIndex > 0) {
        searchInput.placeholder = searchInput.placeholder.slice(0, -1);
        charIndex--;
        setTimeout(eraseSuggestion, 50);
    } else {
        currentIndex = (currentIndex + 1) % suggestions.length;
        setTimeout(typeSuggestion, 500); // Pause before typing next suggestion
    }
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeSuggestion, 1000); // Initial delay before starting
});

function submitSearch() {
    const searchValue = searchInput.value || searchInput.placeholder;
    alert(`Search submitted for: ${searchValue}`);
}

document.getElementById('colorModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('lightMode');
    document.querySelector('.navSearch').classList.toggle('lightMode');
    document.querySelector('.colorModeToggle').classList.toggle('lightMode');
});

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const timeLine = document.querySelector('.timeLine');
    const searchBar = document.querySelector('.searchBar');

    if (searchInput && timeLine) {
        searchInput.addEventListener('focus', () => {
            timeLine.style.height = '100vh';
            searchBar.style.border = '1px solid white';
        });

        searchInput.addEventListener('blur', () => {
            timeLine.style.height = '90vh';
            searchBar.style.border = '1px solid transparent';
        });
    } else {
        console.error('Elements not found: searchInput or timeLine');
    }
});

//Rotating cards and web viewer
const cards = document.querySelectorAll('.carousel-card');
let carouselIndex = 2;  // Declare carouselIndex to avoid conflict

function rotateCarousel() {
    cards.forEach((card, index) => {
        card.style.transition = 'transform 1s, z-index 1s';
        if (index === carouselIndex) {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.zIndex = 3;
        } else if (index === (carouselIndex + 1) % cards.length) {
            card.style.transform = 'translateY(9vh) scale(0.9)';
            card.style.zIndex = 2;
        } else if (index === (carouselIndex + 2) % cards.length) {
            card.style.transform = 'translateY(16vh) scale(0.8)';
            card.style.zIndex = 1;
        } else if (index === (carouselIndex - 1 + cards.length) % cards.length) {
            card.style.transform = 'translateY(-9vh) scale(0.9)';
            card.style.zIndex = 2;
        } else if (index === (carouselIndex - 2 + cards.length) % cards.length) {
            card.style.transform = 'translateY(-16vh) scale(0.8)';
            card.style.zIndex = 1;
        }
    });

    carouselIndex = (carouselIndex + 1) % cards.length;
}

setInterval(rotateCarousel, 4000);
rotateCarousel();
