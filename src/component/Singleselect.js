import React ,{useContext,useRef,useEffect,useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
//import {userContext} from '../App';
 import M from 'materialize-css';


const Create = (props) => {
    const history = useHistory();
    const [app,setApp]=useState("");
    const [all,setAll]=useState([]);
    const [sqs,setSqs]=useState("");
   
   // const {state,dispatch} = useContext(userContext)
   const  searchModal = useRef(null)

   const add=()=>{

    if(app.length>0)
       setAll(prev=>{
           return [
               ...prev,app
       ]
     
       }
       
       )
      
       setApp("");
      
   }
  

   const dlt=(id)=>{
  let newAll=  all.filter((val,idx)=>{
        if(idx!=id)
        return true;
        else{
            return false
        }
    })

    setAll(newAll);
   }


   const publish=()=>{
    props.fillsingle([...all,app],sqs)

   }
    return (

        <div className="mycard">
            <div className="card multi-card">
            <h2 style={{textAlign:"center",color:"green"}}>Survey Tiger</h2>
                
           

              <div style={{marginTop:"50px",textAlign:"center"}}>  <a class='dropdown-trigger btn' href='#' data-target='dropdown1' ref={searchModal}>Single-Select</a></div>
            
              <div style={{display:"flex",marginTop:"25px"}}>
                <div style={{fontSize:"20px",border:"solid 1px grey",width:"40px",textAlign:"center",padding:"5px",borderRadius:"5px"}}>
                   ?
                </div>

                <div style={{fontSize:"20px",border:"solid 1px grey",padding:"5px",borderRadius:"5px",width:"83%"}}>
                <input type="text" placeholder="Type answer here" value={sqs} 
                onChange={(e)=>{setSqs(e.target.value)}}
                />
                </div>
                </div>
            
             <div style={{fontSize:"20px",marginTop:"15px"}}> Options</div>

           
              {
                all.map((val,idx)=>{
                    return (
                        <>
             <div style={{display:"flex",fontSize:"20px",marginTop:"15px"}}> 
             <div  style={{border:"solid 1px",borderRadius:"5px",width:"70%"}}>
             <input type="text" placeholder="Type answer here" value={val} />
             </div>
             <div  style={{border:"solid 1px",borderRadius:"5px"}}>
             <button class="btn waves-effect waves-light" type="submit" name="action" style={{height:"100%"}}
               onClick={add}
             >
                 <i class="material-icons ">add</i>
            </button>
           
             </div>
             <div>
             <button class="btn waves-effect waves-light" type="submit" name="action"  style={{height:"100%"}}
                onClick={()=>{dlt(idx)}}
            >
                 <i class="material-icons ">delete</i>
            </button>
             </div>
             </div>
                        </>
                    )
                })  
              }
               {
               all.length<=1 ? <>   
              <div style={{display:"flex",fontSize:"20px",marginTop:"15px"}}> 
             <div  style={{border:"solid 1px",borderRadius:"5px",width:"70%"}}>
             <input type="text" placeholder="Type answer here" 
              value={app}
              onChange={(e)=>{setApp(e.target.value)}}
             />
             </div>
             <div  style={{border:"solid 1px",borderRadius:"5px"}}>
             <button class="btn waves-effect waves-light" type="submit" name="action" style={{height:"100%"}}
                onClick={add}
             >
                 <i class="material-icons " on>add</i>
            </button>
          
             </div>
             <div>
             <button class="btn waves-effect waves-light" type="submit" name="action"  style={{height:"100%"}}
         
         >
              <i class="material-icons">delete</i>
         </button>
             </div>
             </div>
            

               </>:<> </>

               }
                <div  style={{marginTop:"15px"}}>
               {all.length>=1? <><button class="btn waves-effect waves-light" type="submit" name="action"  style={{height:"100%"}}
               
               onClick={()=>{
                publish()
                history.push("/create")
               }}
               
               >
               Add question
               </button>
                <button class="btn waves-effect waves-light" type="submit" name="action"  style={{height:"100%"}}
                onClick={publish}
                style={{marginLeft:"15px"}}
                onClick={()=>{
                    publish()
                    history.push("/publish")
                   }}
                >
                Publish
                  </button>
                  </>:
                  <>
                  </>
               }
</div>

            </div>

            
        </div>
    )
}

export default Create;