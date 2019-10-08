import React, { Component } from 'react';
import p1 from '../p1.jpg';
import p3 from '../p3.jpg';
import p2 from '../p2.jpg';
 
import './home.css';
 


class Home extends Component {
    render() {
        return ( 
            <div>
            <div class="slider-holder"/>
        <span id="slider-image-1"></span>
        <span id="slider-image-2"></span>
        <span id="slider-image-3"></span>
        <div class="image-holder">
     
            <img src={p1} class="slider-image" />
            <img src={p2} class="slider-image" />
            <img src={p3} class="slider-image" />
        </div>
        <div class="button-holder">
            <a href="#slider-image-1" class="slider-change"></a>
            <a href="#slider-image-2" class="slider-change"></a>
            <a href="#slider-image-3" class="slider-change"></a>
        </div>
 
 
  </div>   );
    }
}

export default Home;