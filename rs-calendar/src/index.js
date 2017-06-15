/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/


import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, Link, Switch } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
//import { Router, Route, browserHistory } from 'react-router-redux';
//import { BrowserRouter } from 'react-router-dom'
//import { BrowserRouter } from 'react-router-dom'
//let { BrowserRouter, Switch, Redirect, Route, Link } = ReactRouter;
//import createHistory from 'history/createBrowserHistory'


import { Provider } from 'react-redux';

import App from './App';
import EventDetails from './components/EventDetails';
///////////////////
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import store from './store';

//const history = createHistory()
//const location = history.location
//history.push('/home')

var Immutable = require("immutable");
 
var installDevTools = require("immutable-devtools");
installDevTools(Immutable);

/*ReactDOM.render(
<Provider store={store}>
	<Router history={history}>
		<Route path="/" component={App}/>
		<Route path="/about" component={EventDetails}/>
	</Router>
</Provider>
, document.getElementById('root'));*/

/*ReactDOM.render(
<Provider store={store}>
	<BrowserRouter basename="/calendar">
		<Switch>
		<Route path="/" component={App}/>
		
		</Switch>
	</BrowserRouter>
</Provider>
, document.getElementById('root'));*/

ReactDOM.render(
<Provider store={store}>
	<App />
</Provider>
, document.getElementById('root'));

store.dispatch({ type: 'LOAD_DATA' });

registerServiceWorker();
///<Route path="/details" component={EventDetails} />