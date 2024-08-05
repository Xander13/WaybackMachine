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
