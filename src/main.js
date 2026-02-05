import {burger} from '/src/scripts/burger.js';
import {accordion} from '/src/scripts/accordion.js';
import {slider} from '/src/scripts/slider.js';
import {observer} from '/src/scripts/observer.js'
import {scroll} from '/src/scripts/scroll.js'
import {formActivation} from '/src/scripts/formActivation.js';
import {formPost} from '/src/scripts/formPost.js';
import {schemeColorChanging} from '/src/scripts/schemeColorChanging.js';
import {initMask} from '/src/scripts/phone-mask.js';
import {dateGet} from '/src/scripts/dateGet.js';

document.addEventListener('DOMContentLoaded', () => {
    burger();
    baguetteBox.run('.galleryBox');
    slider();
    accordion();
    formActivation();
    formPost();
    observer();
    scroll();
    schemeColorChanging();
    initMask();
    dateGet();
});