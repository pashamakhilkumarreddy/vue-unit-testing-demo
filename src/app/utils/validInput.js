const validInputs = (...input) => input.every((num) => typeof num === 'number' && !Number.isNaN(num));

export {
  validInputs,
};

export default validInputs;
