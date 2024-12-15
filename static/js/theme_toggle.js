const themeStyle = document.getElementById('theme-style');
const currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    themeStyle.href = theme === 'dark' ? 'static/css/dark_theme.css' : 'static/css/light_theme.css';
    localStorage.setItem('theme', theme);
}

applyTheme(currentTheme);

document.getElementById('theme-toggle-container').innerHTML = `
    <div class="theme-toggle-container">
        <span class="slider-label" data-translate='theme_light'></span>
        <input type="checkbox" class="slider" id="theme_toggle">
        <span class="slider-label" data-translate='theme_dark'></span>
    </div>
`;

const themeToggle = document.getElementById('theme_toggle');
themeToggle.checked = currentTheme === 'dark';

themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    applyTheme(newTheme);
});
