import React ,{useState,useContext}from 'react';
import {Link,useHistory} from 'react-router-dom'
//import {userContext} from '../App';
 import M from 'materialize-css';


const Home = () => {
    const history = useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   // const {state,dispatch} = useContext(userContext)
    
    console.log(password,email);
    
  
    return (

        <div className="mycard">
            <div className="card auth-card">
            <h4 style={{color:"green"}}>Survey Tiger</h4>
               
                
                 
                 <h5 className="btn waves-effect waves-light #64b5f6 purple lighten-2"><Link to='/create'>Create Survey</Link> </h5>
               <br></br>
                 <h5 className="btn waves-effect waves-light #64b5f6 purple lighten-2"><Link to='/take'>Take Survey</Link> </h5>
                
            </div>
        </div>
    )
}

export default Home;