export default class ComponentService {
  constructor() {
    this.firstNumber = document.querySelector('#first-number');
    this.secondNumber = document.querySelector('#second-number');
    this.addValues = document.querySelector('#add-values');
    this.result = document.querySelector('#result');
  }

  getInputs() {
    return [this.firstNumber.value, this.secondNumber.value];
  }

  setResult(val) {
    this.result.innerText = val;
  }

  submitValues(cb) {
    this.addValues.addEventListener('click', cb);
  }
}
