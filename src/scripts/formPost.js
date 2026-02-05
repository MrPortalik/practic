export function formPost() {
    const form = document.querySelector('form');
    const url1 = 'https://httpbin.org/post';
    const url2 = 'https://httpbin.org/delay/2';
    const url3 = 'https://httpbin.org/status/500';
    const submitButton = form.querySelector('button[type=submit]');
    const bar = form.querySelector('.bar');

    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
    
    async function handleFormSubmit(event) {
        // Отключаем дефолтное поведение
        event.preventDefault();
        disableButton();
        
        try {
            toggleLoader();
            
            const data = new FormData();
            const formElements = form.querySelectorAll('input, textarea, select, button');
            formElements.forEach(element => {
                if (element.getAttribute('type') !== 'radio' || (element.getAttribute('type') === 'radio' && element.checked)) {
                    data.append(element.name, element.value);
                }
            });

            const response = await fetch(url3, {
                method: "POST",
                body: data,
            });

            const result = await response.json()
            bar.classList.add('_success');
        } catch (error) {
            showError(error);
         
        } finally {
            toggleLoader();
            enableButton();
        }
    }

    function disableButton() {
    if (submitButton) submitButton.disabled = true;
    }

    function enableButton() {
    if (submitButton) submitButton.disabled = false;
    }

    function toggleLoader() {
        const loader = document.querySelector('.loader');
        loader.classList.toggle('_active');
    }

    function showError() {
        bar.classList.add('_error');
    }
}