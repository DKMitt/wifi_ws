import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Data from './Data';
import About from './About';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

var config = {
apiKey: "YOUR_APIKEY",
authDomain: "YOUR_AUTHDOMAIN",
databaseURL: "YOUR_DATABASEURL",
projectId: "YOUR_PROJECTID",
storageBucket: "YOUR_STORAGEBUCKET",
messagingSenderId: "YOUR_MESSAGINGSENDERID"
};

firebase.initializeApp(config);


ReactDOM.render(
	  <div className="App">
        <div className="App-header align-center">
			<h2>  <img src="http://www.clker.com/cliparts/y/i/A/F/a/v/cloudy-sun-md.png" alt="logo" width="80px" height="auto" />  WiFi Weather Station</h2>
	    </div>
      </div>, 
  document.getElementById('top')
);

ReactDOM.render(
		<Router>
	    <div className="row">
	      <ul className="nav nav-pills navbar-nav">
	        <li><Link to="/"><button type="button" className="btn btn-primary">Home</button></Link></li>
	        <li><Link to="/data"><button type="button" className="btn btn-success">Data</button></Link></li>
	        <li><Link to="/about"><button type="button" className="btn btn-warning">About</button></Link></li>
	      </ul>

	      <hr/>

	      <Route exact path="/" component={Home}/>
	      <Route path="/data" component={Data}/>
	      <Route path="/about" component={About}/>    
	    </div>
  		</Router>, 
	     
  document.getElementById('root')
);


registerServiceWorker();
