export function themeChanging() {
    const button = document.querySelector('.themeChanger');
    button.addEventListener('click', ()=> {
        button.classList.toggle('_active');
        if (button.classList.contains('_active')) {
            document.documentElement.style.setProperty('--bgcolor', '#302e2d')
            document.documentElement.style.setProperty('--bgreversedcolor', '#ffffff')
        }
        else {
            document.documentElement.style.setProperty('--bgcolor', '#ffffff')
            document.documentElement.style.setProperty('--bgreversedcolor', '#302e2d')
        }
    })
}