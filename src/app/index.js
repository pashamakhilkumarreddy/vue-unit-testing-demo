/* eslint-disable import/no-named-as-default */
import parseInputs from './utils/parseInput';
import validInputs from './utils/validInput';

const runApp = (alertService, componentService) => {
  alertService.hideErrors();

  alertService.removeErrors();

  componentService.submitValues(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (validInputs(...parsedInputs)) {
      const [numOne, numTwo] = parsedInputs;
      componentService.setResult(numOne + numTwo);
    } else {
      componentService.setResult('');
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};

export default runApp;
