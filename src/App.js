import React ,{useContext,useRef,useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Switch,useHistory } from 'react-router-dom';
import Home from './component/Home'
import Create from './component/Create'
import Multi from './component/Multiselect'
import Single from './component/Singleselect'
import Publish from './component/Publish'
function App() {


  const [single,setSingle]=useState([]);
  const [multi,setMulti]=useState([]);
  const [mqs,setMqs]=useState("");
  const [sqs,setSqs]=useState("")

  const fillmulti=(arr,q)=>{
      setMulti([...arr])
      setMqs(q)
  }
 const  fillsingle=(obj,q)=>{
   setSingle([...obj]) 
   setSqs(q)
  }

  console.log(multi,mqs)
  console.log(single)

  return (
    <>
       <BrowserRouter>
       <Switch>
      <Route exact path="/" >
          <Home />
         </Route>
         <Route  path="/create" >
          <Create />
         </Route>
         <Route  path="/multi" >
          <Multi fillmulti={fillmulti}   />
         </Route>
         <Route  path="/single" >
          <Single fillsingle={fillsingle}/>
         </Route>
         <Route  path="/publish" >
          <Publish single={single} multi={multi} mqs={mqs} sqs={sqs} />
         </Route>
        
         </Switch>
        
      </BrowserRouter>
    
    </>
  );
}

export default App;
