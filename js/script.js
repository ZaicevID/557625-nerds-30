const footerButton = document.querySelector('.footer-button');
const modal = document.querySelector('.modal');
const cloasButton = document.querySelector('.modal-close');
const modalForm = modal.querySelector('.modal-form');
const inputName = modal.querySelector('[name=name]');
const inputEmail = modal.querySelector('[name=mail]');
const storageName = localStorage.getItem('name');
const storageEmail = localStorage.getItem('email');



  footerButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal-show');
    inputName.focus();
    if (storageName) {
      inputName.value = storageName;
    }
    if (storageEmail) {
      inputEmail.value = storageEmail;
    }
  });

  cloasButton.addEventListener('click', function() {
    modal.classList.remove('modal-show');
  });




  modalForm.addEventListener("submit", function (evt) {
    if (!inputName.value || !inputEmail.value ) {
      evt.preventDefault();
      inputName.classList.add('input-field-error');
      inputEmail.classList.add('input-field-error');
      inputName.value = 'Введите текст'
    } else {
      localStorage.setItem('name', inputName.value);
      localStorage.setItem('email', inputEmail.value);
    }
    });

  window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
      if(modal.classList.contains('modal-show')) {
        evt.preventDefault();
        modal.classList.remove('modal-show');
      }
    }
  });

