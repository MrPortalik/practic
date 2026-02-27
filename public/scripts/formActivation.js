export function formActivation() {
    const buttons = document.querySelectorAll('.formBtn');
    const section = document.querySelector('#form');
    const bar = document.querySelector('.bar')
    
    buttons.forEach(button => {
        button.addEventListener('click', ()=> {
            section.classList.add('_active');
            document.querySelector('body').classList.add('_lock');

            document.addEventListener('click', (event) => {
                if (!event.composedPath().includes(button) && 
                !event.composedPath().includes(document.querySelector('form')) 
                && !document.getElementById('loader').classList.contains('_active'))
                {
                    formLogic();
                }
            });
        });
    });
    document.addEventListener('keydown', (event) => {
        if (event.key == 'Escape') {
            formLogic();
        }
    });

    function formLogic() {
        {
            document.querySelector('body').classList.remove('_lock');
            section.classList.remove('_active');
            bar.classList.remove('_success');
            bar.classList.remove('_error');
        }
    }
}