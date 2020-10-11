import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Item from './../components/Item';
import {remove} from 'lodash';
import axios from 'axios';

const addData = (tieude,noidung) =>
     (axios.post('/add',{tieude,noidung})
    .then((resp)=>resp.data))

const xoabaiviet = (id) =>
    (axios.post('/delete',{id})
   .then((resp)=>resp.data))

const getall = () => axios.get('/getdata01').then( (res) =>  res.data ) 

class Setting extends Component {

    constructor(props){
        super(props);
        this.state={
            id:null,
            data:null,
            tieude:'',
            noidung:'',
            showform: false,
            searchstr:''
            
        };
       
    }

    ShowFrom(){
      this.setState({
        showform : !this.state.showform
      })
    }

 
    ischange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    handClick = () => {
         let {tieude,noidung} = this.state;
         let dataTemp = [];
         let item = {};
         item.tieude = tieude;
         item.noidung = noidung;
         dataTemp = this.state.data;
         if(item.tieude !=='' || item.noidung !== ''){
            dataTemp.push(item);
            this.setState({ 
                data:dataTemp
            })
         }
         addData(tieude,noidung).then((response)=>{
            console.log(response);
        })
    }
    handleDelete = (id)=>{
       if(confirm('Bạn có chắc chắn muốn xóa không ?')){ //eslint-disable-line
        let {data} = this.state;
        let items=  remove(data,(item)=>{
            return item.id === id;
        })
        console.log(items);
        console.log(data);
        this.setState({
            data: data
        })
        xoabaiviet(id).then((response)=>{
            console.log(response);
        })
       }
    }

     prinData = () =>{
        if (this.state.data !==null) {
            return this.state.data.map((item,index)=>
            (<Item
                ClickDelete = {this.handleDelete}
                key = {index}
                index={index}
                noidung = {item.noidung}
                id={item.id}
                tieude={item.tieude}/>)
            )
            
        }
    }
    
    render() {
        //login
        let {user} = this.props;
		if(user.isLogin === false) {
            return <Redirect to='/login' />;
        }
        //getdata
      if(this.state.data === null){
            getall().then((res)=>{
              
                this.setState({
                    data:res
                });
            })
        }
      
       
        let showform =this.state.showform;
        let elemntForm = null;
        let elmButton = <button onClick={()=>this.ShowFrom()} type="button" className="btn btn-info btn-block">thêm bài viết</button>;
        if(showform === true) {
            elmButton = <button onClick={()=>this.ShowFrom()} type="button" className="btn btn-danger btn-block">Close</button>
        }
        if(showform){
          elemntForm= <div className="row">
              <div className="col-12">
                <hr />
              </div>
              <div className="col-8">
                <form >
                  <div className="form-group">
                    <label htmlFor="product_name">Nhập tiêu đề</label>
                    <input onChange={(event)=>this.ischange(event)} type="text" className="form-control" name="tieude" aria-describedby="name_text" placeholder="Tiêu đề bài viết" />
                 
                  </div>
                  <div className="form-group">
                    <label htmlFor="product_price">nhập nội dung bài viết</label>
                    <textarea onChange={(event)=>this.ischange(event)}  style={{height: '500px'}}  type="text" className="form-control " name="noidung" aria-describedby="name_text" placeholder="nội dung bài viết" />
                    
                  </div>
                  <button type="reset" onClick={()=>this.handClick()}  className="btn btn-info">Thêm mới</button>
                </form> 
              </div>
            </div>
        }

        
        
        return (
            <div className="bg-faded p-4 my-4">
            <h1>Quan Ly <small>website</small></h1>
              <div className="row">
	               <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button  className="btn btn-info" type="button">Go!</button>
                            <button className="btn btn-warning" type="button">Clear</button>
                        </span>
                    </div>
                </div>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5"> {elmButton} </div>
              </div>
                 
              
            
              <div>{elemntForm}</div>
            

            <div className="panel panel-success">
                <div className="panel-heading pt-5 pb-3">Danh sách bài viết</div>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th style={{width: '10%'}} className="text-center">STT</th>
                            <th>Tiêu đề bài viết</th>
                            <th style={{width: '20%'}}>Action</th>
                        </tr>
                    </thead>
                    {this.prinData()}
                </table>
            </div>

  </div>
        );
    }
  }

  const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Setting);

