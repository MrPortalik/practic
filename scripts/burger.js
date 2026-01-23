export function burger() {
    const button = document.querySelector('.burger');
    const menu = document.querySelector('.menuColumn')
    button.addEventListener('click', ()=> {
       menu.classList.toggle('_active');
       menu.classList.toggle('_off')
    })
    document.addEventListener('click', (event)=> {
        if (!event.composedPath().includes(menu)) {
            menu.classList.toggle('_active');
            menu.classList.toggle('_off')
        }
    })
}