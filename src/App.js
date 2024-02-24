import React,{useState} from "react";

import Data from "./Data";
import DisplayDate from "./Components/DisplayData";
import "./style.css";


function App() {
  const [response, setResponse] = useState([])


  return (
    <div className="appStyle">
     <Data setResponse={setResponse}/>
     <DisplayDate response={response} />
    </div>
  )
}


export default App;

