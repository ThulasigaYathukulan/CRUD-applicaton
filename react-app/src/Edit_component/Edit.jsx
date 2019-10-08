import React, { Component } from 'react';
import Header from './../component/header';
import Sidebar from '../component/sidebar';

import './Edit.css';
import Axios from  'axios';
class Edit extends Component {
  state={
    projectName:'',
    projectDescription:'',


  }
 

  componentDidMount() {
      Axios.get("http://localhost:8081/test/api/v1/geProjectById/" +this.props.match.params.id)
      .then(res=>
        {this.setState({
            projectName:res.data.projectName,
            projectDescription:res.data.projectDescription
        })
    
        })  }
        handleChange1=(e)=>{
            this.setState({projectName: e.target.value});
          }
        
        
          handleChange2=(e)=>{
            this.setState({projectDescription: e.target.value});
          }
    
          getList=()=>{
              this.props.history.push("/list")
          }
handleAdd=(e)=>{
  // e.preventDefault();
  Axios.put("http://localhost:8081/test/api/v1/updateproject/"  +this.props.match.params.id ,{projectName:this.state.projectName,projectDescription:this.state.projectDescription})
  .then(result=>
    {
        console.log('sgdfdg'+result);  
    })
    
}

    render()
    
    
     {
        
        return (
        <div>
            <Header/>
            <Sidebar/>
        <div className="container">
        <form onSubmit={this.handleAdd}>
        <div className="row">
          <div className="col-25">
            <label for="fname">Project Name</label>
          </div>
          <div className="col-75">
            <input type="text" id="Project name" name="projectName" placeholder="Project name.." value={ this.state.projectName} onChange={ this.handleChange1}/>
          </div>
        </div>
   

        
          
        <div className="row">
          <div className="col-25">
            <label for="subject">Project Description</label>
          </div>
          <div className="col-75">
            <textarea id="Project Description" name="projectDescription" placeholder="Write something.."  value={ this.state.projectDescription} onChange={ this.handleChange2}></textarea>
          </div>
        </div>
        <div className="row">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <input className ="bt" type="submit" value="Create Project" />
          <div className="row">
          <input  className ="bt" type="button" value="Back" onClick={this.getList}></input>
          </div>
        </div>
        </form>
      </div>
      </div>       );
    }
}

export default Edit;