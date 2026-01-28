export function themeChanging() {
    const toggler = document.querySelector('.themeChanger');
    toggler.addEventListener('change', ()=> {
        toggler.classList.toggle('_active');
        document.querySelector('body').classList.toggle('_changedTheme');
    })
}