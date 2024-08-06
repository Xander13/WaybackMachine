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

document.getElementById('colorModeToggle').addEventListener('click', function () {
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


//display the timeline or the default homescreen
document.getElementById('close').onclick = function () {
    // Fade out the .exploreTimeLine and #timelineChips elements
    document.querySelector('.exploreTimeLine').style.opacity = '0';
    document.getElementById('timelineChips').style.opacity = '0';

    // Wait for the fade out transition to complete before changing display
    setTimeout(function () {
        document.querySelector('.exploreTimeLine').classList.add('hidden');
        document.getElementById('timelineChips').classList.add('hidden');

        // Fade in the .etwAAnimation class
        const etwAAnimation = document.querySelector('.etwAAnimation');
        etwAAnimation.classList.remove('hidden');
        setTimeout(function () {
            etwAAnimation.classList.add('visible');
        }, 10); // Small delay to trigger the transition
    }, 500); // Match the transition duration in CSS

    // Set the .nav top to 0
    document.querySelector('.nav').style.top = '0';
};

//View 5 websites
const container = document.querySelector('.stackedCards');
const baseWidth = 80; // 80vw

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('stacked-div');
    div.style.width = `${baseWidth * (1 - i * 0.09)}vw`; // Decrease width by 9% each time
    div.style.zIndex = 5 - i; // Stacking order
    const bottomPosition = i * 10; // Calculate bottom position
    div.style.bottom = `${bottomPosition}vh`; // Set bottom position
    container.appendChild(div);

    // Add hover event listeners for cards except the first one
    if (i > 0) {
        div.addEventListener('mouseenter', () => {
            div.style.bottom = `${bottomPosition + 20}vh`; // Pop up on hover
        });

        div.addEventListener('mouseleave', () => {
            div.style.bottom = `${bottomPosition}vh`; // Return to original position
        });
    }
}