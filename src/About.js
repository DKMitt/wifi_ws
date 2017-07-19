import React, { Component } from 'react';
import './index.css';

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
				            <div className="col-lg-12">
				                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum ex eget porttitor sollicitudin. Morbi cursus tempor placerat. Pellentesque suscipit tortor in orci pretium, ac facilisis ex pretium. Fusce hendrerit orci diam, vitae tristique quam porttitor eu. Donec ligula orci, ultricies in sagittis non, porta sed lorem. Aenean interdum posuere mattis. Curabitur dignissim dictum quam, vitae malesuada velit tristique a. </p>
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