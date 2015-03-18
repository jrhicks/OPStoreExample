import 'babel-core/polyfill';

import React from 'react';
import OPStore from './ops/OPStore';
import OPActions from './ops/OPActions';
import {opSyncPartition, opSyncAll} from './ops/OPSync';
import App from './components/App';

window.React = React;
window.OPStore = OPStore;
window.OPActions = OPActions;
window.opSyncPartition = opSyncPartition;
window.opSyncAll = opSyncAll;
window.App = App;
