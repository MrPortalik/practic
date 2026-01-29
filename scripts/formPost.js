export function formPost() {
    const form = document.querySelector('form');
    const link = form.action;
    const submitButton = form.querySelector('button[type=submit]');
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
                    console.log(element);
                }
            });


            const response = await fetch(link, {
                method: "POST",
                body: data,
            });

            const result = await response.json()
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
    // Показываем пользователю ошибку
    }
}