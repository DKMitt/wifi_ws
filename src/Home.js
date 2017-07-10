import React, { Component} from 'react';

class Home extends Component {
	render() {
		return (

			<div className="container-fluid col-md-10 col-md-offset-1">
	    	    <div className="">
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
			        <h2>Home</h2>
			        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum ex eget porttitor sollicitudin. Morbi cursus tempor placerat. Pellentesque suscipit tortor in orci pretium, ac facilisis ex pretium. Fusce hendrerit orci diam, vitae tristique quam porttitor eu. Donec ligula orci, ultricies in sagittis non, porta sed lorem. Aenean interdum posuere mattis. Curabitur dignissim dictum quam, vitae malesuada velit tristique a. </p>
			        <div>
			            <div className="more label"><a href="">Read more</a></div> 
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