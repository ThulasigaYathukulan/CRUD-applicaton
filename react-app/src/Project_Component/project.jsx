import React, { Component } from 'react';
import Header from './../component/header';
import Sidebar from '../component/sidebar';
import './project.css';
import Axios from  'axios';
class Project extends Component {
  state={
    projectName:'',
    projectDescription:'',


  }
  handleChange1=(e)=>{
    this.setState({projectName: e.target.value});
  }


  handleChange2=(e)=>{
    this.setState({projectDescription: e.target.value});
  }
  componentDidMount() {}

handleAdd=(e)=>{
  // e.preventDefault();
  Axios.post("http://localhost:8081/test/api/v1/project" ,this.state)
  .then(res=>
    {
console.log(this.state)
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
        {/* <div class="row">
          <div class="col-25">
          <label for="fname">Project Details</label>
          </div>
          <div class="col-75">
            <input type="text" id="Project Details" name="Project Details" placeholder="Project Details.."/>
          </div>
        </div> */}

        
          
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
          <input className ="bt" type="reset" value="Clear"></input>
          
          </div>
        </div>
        </form>
      </div>
      </div>       ); 
    }
}

export default Project;