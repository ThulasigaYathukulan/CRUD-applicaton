import React, { Component } from 'react';
 
import './App.css';
import './component/header.css';
// import './Defect_Component/Defect.css';
// import './Project_Component/project.css';
import Header from './component/header';
import Sidebar from './component/sidebar';
 

const App = () => {
  return ( 
    <div className="App">
    <Header/>
   <Sidebar />

 </div>
   );
}
 
export default App;
 

