import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import {store} from './Components/Redux/Store/store'
import './Components/Person/Person.css'
import './../node_modules/font-awesome/css/font-awesome.css'
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render( <App />,document.getElementById('root'));


