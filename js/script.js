//feedbackForm

let feedback = document.querySelector('.button-contacts');
let modalPopup = document.querySelector('.modal-feedback');
let modalForm = modalPopup.querySelector('.modal-form');
let userName = modalForm.querySelector('.name');
let userEmail = modalForm.querySelector('.email');
let userMessage = modalForm.querySelector('.user-message');
let close = modalPopup.querySelector('.modal-close');
let modalInfo = modalPopup.querySelectorAll('.modal-text');
let buttonFeedback = modalPopup.querySelector('.button-modal');

let isStorageSupport = true;
let storage = '';

try {
    storage = localStorage.getItem('email');
} catch (err) {
    isStorageSupport = false;
}

feedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove('hide');
    userName.focus();
});

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPopup.classList.add('hide');
});

if (storage) {
    userName.value = storage;
    userEmail.value = storage;
    userMessage.focus();
} else {
    userName.focus();
}

modalForm.addEventListener('submit', function (evt) {
    for (let i = 0; i < modalInfo.length; i++) {
        if (!modalInfo[i].value) {
            evt.preventDefault();
            modalInfo[i].classList.add('modal-error');
        } else {
            if (!modalInfo[1].value.includes('@')) {
                evt.preventDefault();
                modalInfo[1].classList.add('modal-error');
            }
        }
        modalInfo[i].onfocus = function () { this.classList.remove('modal-error') }
    };
    localStorage.setItem("name", userName.value);
    localStorage.setItem("e-mail", userEmail.value);
});


//map

let map = document.querySelector('.button-map');
let modalMap = document.querySelector('.modal-map');
let closeMap = modalMap.querySelector('.modal-close');

map.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.remove('hide');
});

closeMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.add('hide');
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        modalMap.classList.add('hide');
        modalPopup.classList.add('hide');
    }
});