export function accordion() {
    const elements = document.querySelectorAll('.head h3, .head button');
    console.log(elements);
    elements.forEach(function(element) {
        const li = element.parentNode.parentNode;
        element.addEventListener('click', ()=> {
            const parent = li.parentNode;
            const active = parent.querySelectorAll('li._opened');
            active.forEach(function(deletable) {
                if (deletable != li) {
                    deletable.classList.remove('_opened');
                    deletable.lastElementChild.style.setProperty('max-height', '0');
                }
            });
                
                li.classList.toggle('_opened');
                const content = li.querySelector('.content')
                ;
                const marginTop = getComputedStyle(content.firstElementChild).marginTop;
                const marginBottom = getComputedStyle(content.lastElementChild).marginBottom;

                li.classList.contains('_opened') ? 
                content.style.setProperty('max-height', 'calc(' + content.scrollHeight 
                    + 'px' + ' + ' + marginTop + ' + ' + marginBottom + ')') :
                content.style.setProperty('max-height', '0');
            })
        }
    )
}