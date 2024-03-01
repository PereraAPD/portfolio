document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.getElementById('themeButton');
    const lightTheme = document.getElementById('lightTheme');
    const darkTheme = document.getElementById('darkTheme');

    themeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        // Toggle active class to highlight the selected theme
        lightTheme.classList.toggle('active',!document.body.classList.contains('dark-theme'));
        darkTheme.classList.toggle('active', document.body.classList.contains('dark-theme'));
    });
});
