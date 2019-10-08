import React, { Component } from 'react';
import bugs from '../bugs.png';
import './header.css'
import Sidebar from './sidebar';
class Header extends Component {
    state = {}
    render() { 
        return ( 
            <div>
              <div class="header"> 
  
 
  
 
  <div class="header-left">

  
  <a href="#default" class="logo">Defect Tracker</a>
  <img src ={bugs}/>
  </div>
  <div class="header-right">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
 
   <a  class="btn-pad"  href="/hom"><i class="fa fa-home"></i> Home</a> 
<a class="btn-pad" href="/log" ><i  class="fa fa-user icon"></i> Login</a>

<a class="btn-pad"><i class="fa fa-info-circle"></i>     AboutUs</a>
  </div>
</div>
            </div>
         );
    }
}
 
export default Header;