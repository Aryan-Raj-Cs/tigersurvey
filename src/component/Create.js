import React ,{useContext,useRef,useEffect,useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
//import {userContext} from '../App';
 import M from 'materialize-css';


const Create = () => {
    const history = useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   // const {state,dispatch} = useContext(userContext)
   const  searchModal = useRef(null)
   useEffect(()=>{
    M.Dropdown.init(searchModal.current)
  
},[])
    console.log(password,email);
    
  
    return (

        <div className="mycard">
            <div className="card auth-card">
            <h4 style={{color:"green"}}>Survey Tiger</h4>
                 {/* <select >
                    <option value="volvo...">Volvo</option>
                    <option value="saab....">Saab</option>
                    <option value="opel...">Opel</option>
                    <option value="audi...">Audi</option>
                </select> */}
               

             
  <a class='dropdown-trigger btn' href='#' data-target='dropdown1'  ref={searchModal}>Select Question Type!</a>


  <ul id='dropdown1' class='dropdown-content'>
    <li><Link to="/single">Single-Select</Link></li>
    <li><Link to="/multi">Multi-Select</Link></li>
    
  </ul>
               
                

             
            </div>
        </div>
    )
}

export default Create;