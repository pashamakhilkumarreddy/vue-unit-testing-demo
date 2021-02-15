import validateInputs from './utils/validInput';

export default class AlertService {
  constructor() {
    this.errorContainer = document.querySelector('#error-container');
    this.errorBox = document.querySelector('#error');
    this.removeError = document.querySelector('#remove-error');
  }

  handleAdditionError(inputs, numbers) {
    const message = inputs.reduce((initialMessage, str, index) => {
      if (validateInputs(numbers[index])) {
        return `${initialMessage}`;
      }
      return `${initialMessage} ${str} is not a number`;
    }, 'Please enter two valid numbers!');
    this.errorContainer.classList.remove('is-hidden');
    this.errorBox.classList.remove('is-hidden');
    this.errorBox.innerHTML = message;
  }

  removeErrors() {
    this.removeError.addEventListener('click', () => {
      this.hideErrors();
    });
  }

  hideErrors() {
    this.errorContainer.classList.add('is-hidden');
    this.errorBox.classList.add('is-hidden');
  }
}
