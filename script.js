const toggleButton = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');

const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    themeStylesheet.setAttribute('href', 'dark.css');
    toggleButton.textContent = 'Wechsel zu Hellmodus';
}

toggleButton.addEventListener('click', () => {
    if (themeStylesheet.getAttribute('href') === 'light.css') {
        themeStylesheet.setAttribute('href', 'dark.css');
        toggleButton.textContent = 'Wechsel zu Hellmodus';
        localStorage.setItem('theme', 'dark');
    } else {
        themeStylesheet.setAttribute('href', 'light.css');
        toggleButton.textContent = 'Wechsel zu Dunkelmodus';
        localStorage.setItem('theme', 'light');
    }
});
