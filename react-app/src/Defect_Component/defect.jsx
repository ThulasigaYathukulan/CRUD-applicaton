import React, { Component } from 'react';
import Sidebar from '../component/sidebar';
import Header from '../component/header';
import './Defect.css';
class Defect extends Component {
  state = {  }
  render() { 
      return (<div>
        <Header/>
     <Sidebar/>
     
     <div class="container1">
      <form >   
      <div class="row">
        <div class="col-25">
          <label for="did">Defect ID</label>
        </div>
        <div class="col-75">
          <input type="text" id="did" name="defectid" placeholder="Enter ID.."/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="dname">Defect Name</label>
        </div>
        <div class="col-75">
          <input type="text" id="dname" name="defectname" placeholder="Defect name.."/>     
            </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="proid">project ID</label>
        </div>
        <div class="col-75">
          <select id="proid" name="projectid">
            <option value="#"></option>
            <option value="#"></option>
            <option value="#"></option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="description">Defect Description</label>
        </div>
        <div class="col-75">
          <textarea id="description" name="description" placeholder="Write something.." ></textarea>
        </div>
      </div>

<table>
  <tr>
    <td className='sev'>
      <p> Severity</p>
    <input className="radio" type="radio" name="severity" value="High" />High<br></br>

   
<input className="radio" type="radio" name="severity" value="Medium"/>Medium<br></br>


<input className="radio" type="radio" name="severity" value="Low"/>Low<br></br>
  
 
    </td>
     
     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <td className='sev'><p> Priority</p>
  
  <input className="radio" type="radio" name="gender" value="High" />High<br></br>

   
  <input className="radio" type="radio" name="gender" value="Medium"/>Medium<br></br>
 
  
  <input className="radio" type="radio" name="gender" value="Low"/>Low<br></br>
  
  </td>
  
  </tr>
</table>


      
  
  
  
      <div class="row">
<input className="bt" type="reset" value="Reset"/>
<div class="row">
  <input className="bt" type="submit" value="Create"/>
</div>
</div>
      </form>
    
   
   
  
  </div>
    </div>);
  }
 }

export default Defect;