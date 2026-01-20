export function burger() {
    const button = document.querySelector('.burger');
    button.addEventListener('click', ()=> {
       button.classList.toggle('_active');
    })
}