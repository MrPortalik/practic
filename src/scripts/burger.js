export function burger() {
    const button = document.querySelector('.burger');
    const menu = document.querySelector('.menuColumn')
    button.addEventListener('click', ()=> {
       menu.classList.toggle('_active');
       menu.classList.toggle('_off');
    })
    document.addEventListener('click', (event)=> {
        if (!event.composedPath().includes(menu) && !document.querySelector('body').classList.contains('_lock')) {
            menu.classList.remove('_active');
            menu.classList.add('_off')
        }
    })
}