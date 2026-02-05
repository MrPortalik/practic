export function dateGet() {
    const date = new Date().getFullYear();
    const dateElements = document.querySelectorAll('.dateElement');
    dateElements.forEach(element => {
        element.textContent = element.textContent.replace('{{DATE}}', date);
    });
}