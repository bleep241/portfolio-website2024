const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');

    // State variable that keeps track of theme
    const theme = localStorage.getItem('theme');

    // This line runs on mount
    theme && document.body.classList.add(theme); 
    
    // Handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class')
        }
    }

    // Events
    themeToggleBtns.forEach(button => button.addEventListener('click', handleThemeToggle));
};

export default darkMode;