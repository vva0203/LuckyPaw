const modal = document.querySelector('.modal__container');
const modal_bg = document.querySelector('.modal__background');
const closeButton = document.querySelector('.modal__close');

function openModal() {
    modal.classList.add('is-open');
}

function closeModal() {
modal.classList.remove('is-open');
}
setTimeout(openModal, 5000);
modal_bg.addEventListener('click', (a) => {

        closeModal();
    
});
closeButton.addEventListener('click', closeModal);