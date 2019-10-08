import React, { Component } from 'react';
import './Sidebar.css'
class Sidebar extends Component {
    render() {
        return (
            <div>
                <div class="sidenav">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <a className="fa fa-line-chart" href="/Dash"> Dashboard</a>
                <div class="dropdown">
  < a className="fa fa-pencil-square-o">  Projects   <i class="fa fa-caret-down" /> </ a> 
  <div className="dropdown-content">
    <a href="/newpro">Create New Project</a>
    <a href="/list">Project List</a>
     
  </div>
</div>


< a className="	fa fa-wrench" href="/defect"> Defects</a>
  <div class="dropdown">
  < a className="	fa fa-users"> Users  <i class="fa fa-caret-down" /></a>
  <div className="dropdown-content">
    <a href="/pro">Profile</a>
    <a href="#">Previlages</a>
    <a href="#">Experience</a>
    </div>
    </div>

    < a className="	fa fa-gears"> Settings</a>
</div>
            </div>
            
            
        );
    }
}

export default Sidebar;