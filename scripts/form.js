export function form() {
    const buttons = document.querySelectorAll('.requestBtn');
    const section = document.querySelector('#form');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', ()=> {
        section.classList.add('_active');
        document.body.style.overflow = 'hidden';
        document.querySelector('body').classList.add('_lock')

        document.addEventListener('click', (event)=> {
            if (!event.composedPath().includes(button) && 
            !event.composedPath().includes(document.querySelector('form'))) {
                    document.body.style.overflow = 'visible';
                    section.classList.remove('_active');
                }
            })
        })
    })
}

//добавить выход из формы по Esc + назначать на утилитарный класс блокировку прокрута