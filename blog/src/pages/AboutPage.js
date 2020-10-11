import React, { Component } from 'react';

class AboutPage extends Component {
	render() {
		return (
  	
			<div className="bg-faded p-4 my-4">
			    <hr className="divider" />
			    <h2 className="text-center text-lg text-uppercase my-0"><strong> Giới thiệu về bản thân.</strong>
			    </h2>
			    <hr className="divider" />
			    <div className="d-flex">
			    <img className="card-img w-50 mr-2" src="img/sss.jpg" alt="dim" />
			    <div><p>Xin chào, tôi là Dim. Đây là nơi tôi ghi chép lại những suy nghĩ vớ vẩn, những cảm nhận trong cuộc sống và những công thức nấu ăn.
			    </p>
			    <p>hi vọng các bạn sẽ thích những bài viết của mình</p>
			    </div>
			    </div>
			</div>
			
		);
	}
}

export default AboutPage;
