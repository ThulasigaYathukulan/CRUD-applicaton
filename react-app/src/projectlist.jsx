import React, { Component } from 'react';
import './projectlist.css';
import Header from './component/header';
import Sidebar from './component/sidebar'; 
import Axios from  'axios';
import Project from './Project_Component/project';
class ProjectList extends Component {
    state = {
        data:[]
    }
handleDelete=(id)=>{
    console.log(id)
    Axios.delete("http://localhost:8081/test/api/v1/project/" +id)
this.refreshPro();
    
}
refreshPro() {
    Axios.get("http://localhost:8081/test/api/v1/project").then(res => {
      console.warn("Refresh Service is working");
      this.setState({ data:res.data });
    });
  }

  
   componentDidMount() {

       Axios.get("http://localhost:8081/test/api/v1/project"  )
       .then(res=>{
        console.log(res);
           this.setState({ data:res.data})
       })
   }

    render() {
        return (
            <div>

                <Header />
                <Sidebar />

                <div>
                    <div className="form-style-6">

                        <table>
                            <th  >    <a  className="btn-pad1"  href="/newpro"><i class="fa fa-edit"></i> Add</a></th>
                            <tr>
                                <th>Project ID</th>
                                <th>Project Name</th>
                                <th>Project Discription</th>
                                <th>Action</th>
                            </tr>
                           { this.state.data.map(d=>
                            {
                                return(
<tr>
                                <td>{d.id}</td>
                                <td>{d.projectName}</td>
                                <td>{d.projectDescription}</td>
                               <td> <a    href={`/edit/${d.id}`}><i class="fa fa-edit" >  </i> Edit</a></td>
                               {/* <td> <a  className="btn-pad1"  ><i class="fa fa-trash" onClick={() => this.handleDelete(d.id)}> </i> Delete</a></td>   */}
                               
                                <td > < a className="btn-pad1"  class="fa fa-trash" onClick={()=>this.handleDelete(d.id)} /> 
                                 </td>
                            </tr>
                                )
                            })}
                            




                        </table>

                    </div>

                </div>
            </div>
        );
    }
}

export default ProjectList;