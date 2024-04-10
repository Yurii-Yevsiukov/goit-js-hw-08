import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[name="email"]'),
  textareaMessage: document.querySelector('textarea[name="message"]'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

populateInputs();

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onInput (e) {
  const objectToLocal = {
    email: refs.inputEmail.value,
    message: refs.textareaMessage.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToLocal));
}

function onFormSubmit (e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateInputs () {
  try {
    const savedState = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedState) {
      refs.inputEmail.value = JSON.parse(savedState).email;
      refs.textareaMessage.value = JSON.parse(savedState).message;
    }
  } catch (err) {
    console.error('Проблеми з доступом до локальних даних:', err);
  }
}
