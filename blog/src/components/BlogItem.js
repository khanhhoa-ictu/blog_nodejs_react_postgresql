import React, { Component } from 'react';
import {NavLink } from "react-router-dom";

class BlogItem extends Component {
	render() {

		return (
		    <div className="bg-faded p-4 my-4">
			    <div className="card card-inverse">
			        <img className="card-img img-fluid w-100" src="img/slide-1.jpg" alt="slide-1" />
			        <div className="card-img-overlay bg-overlay">
			            <h2 className="card-title text-shadow text-white text-uppercase mb-1">{this.props.tieude}</h2>
						
							<p 
							  className=" lead card-text text-shadow text-white  break-word w-50 d-xs-block text">
							{this.props.noidung}
							</p>
				
			           	
			            <NavLink exact to ={'blog/' + this.props.id} className="btn btn-secondary">Xem Thêm</NavLink>
			        </div>
			    </div>
			</div>
		);
	}
}

export default BlogItem;
