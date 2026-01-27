export function scroll() {
    const block = document.querySelector('.animatedThing');

    window.addEventListener('scroll', () => {
        const blockBounds = block.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;

        const startScroll = scrollTop + blockBounds.top - 1080;
        const endScroll = scrollTop + blockBounds.bottom + 100;

        let progress = (scrollTop - startScroll) / (endScroll - startScroll);
        progress = Math.min(Math.max(progress, 0), 1);

        block.style.transform = `translateX(${-150 + 1400 * progress}px)`;
    });
}