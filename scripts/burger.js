export function burger() {
    const button = document.querySelector('.burger');
    const list = document.querySelector('.list')
    button.addEventListener('click', ()=> {
       list.classList.toggle('_active');
    })
}