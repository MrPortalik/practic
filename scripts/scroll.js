export function scroll() {
    const block = document.querySelector('.animatedThing');
    const container = document.querySelector('.container');
    const width = container.getBoundingClientRect().width;

    window.addEventListener('scroll', () => {
        const blockBounds = block.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;

        const startScroll = scrollTop + blockBounds.top - 1500;
        const endScroll = scrollTop + blockBounds.bottom - 200;

        let progress = (scrollTop - startScroll) / (endScroll - startScroll);
        progress = Math.min(Math.max(progress, 0), 1);

        block.style.transform = `translateX(${(width * progress - blockBounds.width)}px)`;
    });
}