import './styles/app.css'

import React from 'react';
import ReactDOM from 'react-dom';
import TaskBox from './components/TaskBox.jsx';
import {CONFIG} from "./constants/constants"


ReactDOM.render(<TaskBox url={CONFIG.urlTasks} pollInterval={CONFIG.pollInterval} />, document.getElementById('root'));