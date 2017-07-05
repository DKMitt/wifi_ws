import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Forecast from './Forecast';
import History from './History';
import Location from './Location';
import About from './About';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
	  <div className="App">
        <div className="App-header">
			<h2>  <img src="http://www.clker.com/cliparts/y/i/A/F/a/v/cloudy-sun-md.png" width="80px" height="auto" />  WiFi Weather Station</h2>
	    </div>
      </div>, 
  document.getElementById('top')
);

ReactDOM.render(
		<Router>
	    <div className="row">
	      <ul className="nav nav-pills navbar-nav">
	        <li><Link to="/"><button type="button" className="btn btn-default">Home</button></Link></li>
	        <li><Link to="/forecast"><button type="button" className="btn btn-warning">Forecast</button></Link></li>
	        <li><Link to="/history"><button type="button" className="btn btn-success">History</button></Link></li>
	        <li><Link to="/location"><button type="button" className="btn btn-primary">Location</button></Link></li>
	        <li><Link to="/about"><button type="button" className="btn btn-info">About</button></Link></li>
	      </ul>

	      <hr/>

	      <Route exact path="/" component={Home}/>
	      <Route path="/forecast" component={Forecast}/>
	      <Route path="/history" component={History}/>
	      <Route path="/location" component={Location}/>
	      <Route path="/about" component={About}/>    
	    </div>
  		</Router>, 
	     
  document.getElementById('root')
);


registerServiceWorker();
