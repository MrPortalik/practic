export function observer() {

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('_observed');
            observer.unobserve(entry.target);
        }
        });
        }, {
            threshold: 0.3,
    });

document.querySelectorAll('.animatable').forEach(element => {
    observer.observe(element);
    });
}
