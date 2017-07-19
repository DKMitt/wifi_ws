import React, {Component} from 'react';
import './index.css';
import * as firebase from 'firebase';



class Home extends Component {

	constructor() {
		super();
		this.state = {
			ctemp: 13,
			chumidity: 23,
			cvolts: 0.75
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
			        <h2>Home</h2>
			        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum ex eget porttitor sollicitudin. Morbi cursus tempor placerat. Pellentesque suscipit tortor in orci pretium, ac facilisis ex pretium. Fusce hendrerit orci diam, vitae tristique quam porttitor eu. Donec ligula orci, ultricies in sagittis non, porta sed lorem. Aenean interdum posuere mattis. Curabitur dignissim dictum quam, vitae malesuada velit tristique a. </p>
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