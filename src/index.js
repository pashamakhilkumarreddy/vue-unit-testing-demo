import runApp from './app';
import AlertService from './app/alert.service';
import ComponentService from './app/component.service';

import '../node_modules/bulma/css/bulma.min.css';
import './assets/styles/index.css';

const alertService = new AlertService();
const componentService = new ComponentService();

console.info('Running Application');
runApp(alertService, componentService);
