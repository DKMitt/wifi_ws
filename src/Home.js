import React, { Component} from 'react';
import * as firebase from 'firebase';

class Home extends Component {

	constructor() {
		super();
		this.state = {
			ctemp: 20,
			chumidity: 21,
			cvolts: 1.2
		};
	}

	componentDidMount() {
		const rootRef = firebase.database().ref().child('wsdata');
		const ctempRef = rootRef.child('ctemp');
		ctempRef.on('value', snap => {
			this.setState({
				ctemp: snap.val()
			});
		});

		const chumidityRef = rootRef.child('chumidity');
		chumidityRef.on('value', snap => {
			this.setState({
				chumidity: snap.val()
			});
		});

		const cvoltsRef = rootRef.child('cvolts');
		cvoltsRef.on('value', snap => {
			this.setState({
				cvolts: snap.val()
			});
		});
	}

	render() {
		return (

			<div className="container-fluid col-md-10 col-md-offset-1">
	    	    <div className="App">
					<div>
						<h2>Home</h2>
						<h3>Home this app</h3>
						<p>
							WiFi Weather Station App made using React.js
						</p>
					</div>
				</div>
				<div className="">
				<div className="">
			        
			        <h4>Current Temp:</h4> <h3>{this.state.ctemp}</h3>   <h4>Current Humidity:</h4> <h3> {this.state.chumidity} </h3>
			        
			        <div>
			            <div className="more label"><h5>Voltage State: {this.state.cvolts}</h5></div> 
			            <div className="tags">
			                <span className="btn-danger"><a href="/history">History</a></span><span className="btn-danger"><a href="/location">Location</a></span><span className="btn-danger"><a href="/forecast">Forecast</a></span>
			            </div>   
			        </div> 
  
			        <div className="clear"></div>  
			        <hr></hr>
			        <div className="align-center">copyright © 2017 WiFi Weather Station</div>
			        <br></br>
			    </div>
			</div>

			</div>
				
		);
	}
}

export default Home;