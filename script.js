const toggleButton = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');

// Set the initial theme based on localStorage or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    themeStylesheet.setAttribute('href', 'dark.css');
    toggleButton.textContent = 'Wechsel zu Hellmodus'; // Change to Light Mode
} else {
    themeStylesheet.setAttribute('href', 'light.css');
}

// Toggle the theme when button is clicked
toggleButton.addEventListener('click', () => {
    if (themeStylesheet.getAttribute('href') === 'light.css') {
        themeStylesheet.setAttribute('href', 'dark.css');
        toggleButton.textContent = 'Wechsel zu Hellmodus'; // Change to Light Mode
        localStorage.setItem('theme', 'dark');
    } else {
        themeStylesheet.setAttribute('href', 'light.css');
        toggleButton.textContent = 'Wechsel zu Dunkelmodus'; // Change to Dark Mode
        localStorage.setItem('theme', 'light');
    }
});