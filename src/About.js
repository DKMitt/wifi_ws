import React, { Component } from 'react';
import './index.css';
import smartfarm from './img/smart-farm.jpg';
import esp8266dht11 from './img/ESP8266-DHT11.jpg';


class About extends Component {
	render() {
		return (

			<div className="container-fluid col-md-12">

				

				
			<div className="col-md-10 col-md-offset-1">
		        <h2>About</h2>
		        <p>About this project</p>
		        
		    
		        <div className="panel panel-warning">
				    <div className="panel-heading">
				       <span> About This Project </span>
				    </div>
				    <div className="panel-body">
				        <div className="row">
				            <div className="col-lg-12 aboutcont">
				                <img src={smartfarm} className="smartfarm img-fluid" alt="smartfarm" />
				                <p></p>
				                <p>This project is to measure the temperature and humidity in real time with sensor and then transmit the data via WiFi to Firebase, a real-time cloud database, and then display the data with various web technologies in a website interface. </p>
				                <p></p>
				                <p>App & Device can be used to monitor weather conditions in agricultural, industrial or commercial applications and can be expanded to monitor numerous other types of data according to the need of the client, market and by sensors available.</p>
				                <p></p>
				                <br></br>
				                <p><b>WiFi Weather Station Breadboard Layout</b></p>
								<img src={esp8266dht11} className="esp8266dht11 img-fluid" alt="ESP8266-DHT11" />
				                <p> </p>
				                <p><b>Hardware used for this project</b>
				                <p></p>
				                	<ul>
				                		<li>Adafruit Feather HUZZAH ESP8266 development board with built in USB and battery charging</li>
										<li>DHT-11 Digital temperature and humidity sensor</li>
										<li>10K Ohm Resistor, 5%, 1/4 watt Color code: Brown, Black, Orange, Gold</li>
										<li>220K Ohm Resistor, 5%, 1/4 watt Color code: Red, Red, Yellow, Gold</li>
										<li>1M Ohm Resistor, 5%, 1/4 watt Color code: Brown, Black, Green, Gold</li>
									</ul>
								</p>
								<p></p>
								<br></br>
								<p>Additional information on this project can be found by going to  <a href="https://github.com/DKMitt/wifi_ws" target="blank">https://github.com/DKMitt/wifi_ws</a></p>
				            </div>
				        </div>
				    </div>
				</div>

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

export default About;