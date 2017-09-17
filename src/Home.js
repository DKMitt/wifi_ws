import React, {Component} from 'react';
import './index.css';
import * as firebase from 'firebase';



class Home extends Component {

	constructor() {
		super();
		this.state = {
			ctemp: 0,
			chumidity: 0,
			cvolts: 0.00
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

		
	}

	render() {
		return (

			<div className="container-fluid col-md-12">

				<div className="col-md-12 ">

					<div className="row col-md-10 col-md-offset-1">
						<div className="col-md-5 center-block">
							<h4>Current Temperature:</h4> <h1>{this.state.ctemp}°C</h1>
						</div>
						<div className="col-md-1"></div>
						<div className="col-md-5 center-block">
							<h4>Current Humidity:</h4> <h1> {this.state.chumidity}%</h1>
						</div>
				    </div>

				</div>

				
				<div className="col-md-10 col-md-offset-1">
			        </div>  

				<div className="col-md-12">
			        <div className="footer-space"> 
				        <hr></hr>
				        	<p>copyright © 2017 WiFi Weather Station</p>
				        <br></br>
			    	</div>
		    	</div>
			</div>	
		);
	}
}

export default Home;