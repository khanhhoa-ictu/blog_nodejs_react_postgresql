import React, { Component } from 'react';
import axios from 'axios';
const getall = () => axios.get('/getdata01').then( (res) =>  res.data)
class Item extends Component {
	constructor(props){
        super(props);
        this.state={
            data:null
        }
    }
    componentWillMount(){
        if(this.state.data === null){
            getall().then((res)=>{
                this.setState({
                    data:res
                });
            })
        }
        
    }
     prinData = () =>{
        if (this.state.data !==null){
          return  this.state.data.map((value,key)=>{
              key={key}
                if(value.id===this.props.match.params.id){

                  return  (<div className="bg-faded p-4 my-4">

                      <hr className="divider" />
                      <h2 className="text-center text-lg text-uppercase my-0"><strong>{value.tieude}</strong>
                      </h2>
                      <hr className="divider" />
                      <div className="d-flex">
                    
                      <div>
                        <p>{value.noidung}</p>
                      </div>
                      </div>
                     </div>
                     ) 

                }
            }
            )
            
        }
}
    
  	
   	
	render() {
        
		return (
    		<div>
                {this.prinData()}
             </div>
		);
	}
}

export default Item;
