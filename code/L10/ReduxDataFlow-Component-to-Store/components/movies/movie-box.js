import React, {Component} from 'react';

export default class MovieBox extends Component{

//Show the participants, http://getbootstrap.com/components/#thumbnail
		render(){
        

			var movieChoosen = {
				key:this.props.key,
				title: this.props.title,
				desc: this.props.desc,
				pic: this.props.pic
			};
			return(
				<div>
					<div className="col-sm-6 col-md-4">
						<div className="thumbnail">
							<img src={this.props.pic}></img>
							<div className="caption">
								<h3 ref="title">{this.props.title}<span className="label label-default"></span></h3>
								<p ref="desc">{this.props.desc}</p>
								<p>
									<button className="btn btn-primary" onClick={()=> this.props.handleBooking(movieChoosen)}>Book</button>
									<button className="btn btn-default">Read More...</button>
								
								</p>
							</div>
							
						</div>
					</div>
				</div>

				);


		}
}