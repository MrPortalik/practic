export function themeChanging() {
    const togglers = document.querySelectorAll('.toggler');
    togglers.forEach(toggler => {
        toggler.addEventListener('change', ()=> {
        toggler.classList.toggle('_active');
        toggler.classList.toggle('_off');
        document.querySelector('body').classList.toggle('_changedTheme');
    })
    })
}