import React, { Component } from 'react';
import axios from 'axios';

const getall = () => axios.get('/getdata01').then( (res) =>  res.data ) 
class Footer extends Component {
   constructor(props){
        super(props);
        this.state={
            
            data:null,
            tieude:'',
            noidung:''
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount(){
        if(this.state.data === null){
            getall().then((res)=>{
                this.setState({
                    data:res
                });
            })
        }        
    }
    
    handleDelete(id){
        this.props.ClickDelete(id);
        
    }
	render() {
		return (
  			     <tbody>
                    <tr>
                        <td className="text-center" name="index">{this.props.index + 1}</td>
                        <td name="tieude">{this.props.tieude}</td>
                        <th>
                            <button  className="btn btn-warning">Edit</button>
                            <button onClick={()=>this.handleDelete(this.props.id)} className="btn btn-danger">Delete</button>
                    	</th>
                 </tr>
                </tbody>
		);
	}
}

export default Footer;

