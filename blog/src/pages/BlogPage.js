import React, { Component } from 'react';
import axios from 'axios';
import BlogItem from './../components/BlogItem';

const getall = () => axios.get('/getdata01').then( (res) =>  res.data ) 
class BlogPage extends Component {
	constructor(props){
        super(props);
        this.state={
            data:null
        }
    }
    
    prinData = () =>{
        console.log(this.state.data);
        if (this.state.data !==null) {
            return this.state.data.map((value,index)=>
            (<BlogItem
                key = {index}
                index = {index}
                id ={value.id}
                tieude={value.tieude}
                noidung={value.noidung}/>)
            )
            
        }

    }
	render() {
        if(this.state.data === null){
            getall().then((res)=>{
                this.setState({
                    data:res
                });
            })
        }
        
        //console.log(this.state.data);
		return (

  			
            <div>
			    {this.prinData()}
			</div>
		);
	}
}

export default BlogPage;