import React ,{useState,useContext}from 'react';
import {Link,useHistory} from 'react-router-dom'
//import {userContext} from '../App';
 import M from 'materialize-css';


const Publish = (props) => {
    const history = useHistory();
  
   // const {state,dispatch} = useContext(userContext)
    
    console.log(props.single,props.multi);
    
  
    return (

        <div className="mycard">
            <div className="card auth-card">
                <h4 style={{color:"green"}}>Survey Tiger</h4>
               <span><strong>{props.mqs}</strong></span>
                {
                props.multi.map(val=>{
                    return(
                        <>

                            <div style={{ display: "flex" }} >

                                <div><form action="#">

                                    <label>
                                        <input type="checkbox" />
                                        <span>{val}</span>
                                    </label>

                                </form></div>   <div></div>

                            </div>
                        </>
                    )
                })

                }
            <span><strong> {props.sqs}</strong></span>
            <div  > 
                        {

                            props.single.map(val=>{
                                return(
                                    <>
                                        <div style={{ display: "flex" }} >

                                            <div><form action="#">

                                                <label>
                                                    <input type="checkbox" />
                                                    <span>{val}</span>
                                                </label>

                                            </form></div>   <div></div>

                                      </div>
                                    </>
                                )
                            })
                        }
                          
                        
                         </div>
             <button class="btn waves-effect waves-light red" type="submit" name="action" style={{height:"100%"}}>
                Conform
            </button>
                
            </div>
        </div>
    )
}

export default Publish;