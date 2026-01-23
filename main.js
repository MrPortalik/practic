import {burger} from '/scripts/burger.js';
import {accordion} from '/scripts/accordion.js';
import {slider} from '/scripts/slider.js';

document.addEventListener('DOMContentLoaded', () => {
    burger();
    baguetteBox.run('.galleryBox');
    slider();
    accordion();
});