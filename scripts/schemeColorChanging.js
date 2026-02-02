export function schemeColorChanging() {
    const body = document.querySelector('body');

    if (localStorage['schemeColor']) {
        body.classList.add(localStorage.getItem('schemeColor'));
        console.log(localStorage.getItem('schemeColor'));
    }
    else {
        const isLight = window.matchMedia('(prefers-color-scheme: light)');
        let schemeColor = isLight ? '_light' : '_dark';
        localStorage.setItem('schemeColor', schemeColor);
    }

    const togglers = document.querySelectorAll('.toggler');
    togglers.forEach(toggler => {
        toggler.addEventListener('change', ()=> {
            let schemeColor = localStorage.getItem('schemeColor');
            const revSchemeColor = schemeColor === '_dark' ? '_light' : '_dark';
            body.classList.remove(schemeColor);
            body.classList.add(revSchemeColor);
            schemeColor = revSchemeColor;
            localStorage.setItem('schemeColor', schemeColor);
        });
    });
}