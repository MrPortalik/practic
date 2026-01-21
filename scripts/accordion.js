export function accordion() {
    const elements = document.querySelectorAll('h3.clickable');
    elements.forEach(function(element) {
        const content = element.parentNode;
        element.addEventListener('click', ()=> {
            const parent = content.parentNode;
            const active = parent.querySelectorAll('li._opened');
            active.forEach(function(deletable) {
                deletable.classList.remove('_opened');
            })
            content.classList.toggle('_opened');
            })
        }
    )
}