import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

function App() {
	return (
		<Router>
			<div className='container mt-3'>
				<Switch>
					<Route exact path='/' component={Form} />
					<Route path='/card' component={Card} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
