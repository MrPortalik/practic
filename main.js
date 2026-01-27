import {burger} from '/scripts/burger.js';
import {accordion} from '/scripts/accordion.js';
import {slider} from '/scripts/slider.js';
import {form} from '/scripts/form.js';
import {observer} from '/scripts/observer.js'
import {scroll} from '/scripts/scroll.js'

document.addEventListener('DOMContentLoaded', () => {
    burger();
    baguetteBox.run('.galleryBox');
    slider();
    accordion();
    form();
    observer();
    scroll();
});