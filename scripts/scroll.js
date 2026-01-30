export function scroll() {
    window.addEventListener('scroll', calculate);
    window.addEventListener('resize', calculate);

    function calculate() {
        const block = document.querySelector('.animatedThing');
        const container = document.querySelector('.animatedBox');
        const width = container.getBoundingClientRect().width;
        const blockBounds = block.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;

        const startScroll = scrollTop + blockBounds.top - 350;
        const endScroll = scrollTop + blockBounds.bottom - 320;

        let progress = (scrollTop - startScroll) / (endScroll - startScroll);
        progress = Math.min(Math.max(progress, 0), 1);

        block.style.transform = `translateX(${((width - blockBounds.width) * progress)}px)`;
    }
}