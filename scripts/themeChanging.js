export function themeChanging() {
    const body = document.querySelector('body');

    if (localStorage['theme']) {
        body.classList.add(localStorage.getItem('theme'));
        console.log(localStorage.getItem('theme'));
    }
    else {
        const isLight = window.matchMedia('(prefers-color-scheme: light)');
        let theme = isLight ? '_light' : '_dark';
        let revTheme = isLight ? '_dark' : '_light';
        localStorage.setItem('theme', theme);
        localStorage.setItem('revTheme', revTheme);
    }

    const togglers = document.querySelectorAll('.toggler');
    togglers.forEach(toggler => {
        toggler.addEventListener('change', ()=> {
            let theme = localStorage.getItem('theme');
            let revTheme = localStorage.getItem('revTheme');
            body.classList.remove(theme);
            body.classList.add(revTheme);
            [theme, revTheme] = [revTheme, theme];
            localStorage.setItem('theme', theme);
            localStorage.setItem('revTheme', revTheme);
            console.log(theme, revTheme);
        });
    });
}