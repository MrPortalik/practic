import {burger} from '/scripts/burger.js';
import {accordion} from '/scripts/accordion.js';
import {slider} from '/scripts/slider.js';
import {observer} from '/scripts/observer.js'
import {scroll} from '/scripts/scroll.js'
import {formActivation} from '/scripts/formActivation.js';
import {formPost} from '/scripts/formPost.js';

document.addEventListener('DOMContentLoaded', () => {
    burger();
    baguetteBox.run('.galleryBox');
    slider();
    accordion();
    formActivation();
    formPost();
    observer();
    scroll();
});