import Header from "./layout/Header";
import Home from "./component/Home";

import { Routes, Route } from "react-router-dom";



function App() {
  return (
   
    <Routes>
            <Route element= {<Header/>}>
              <Route path="/" element= {<Home/>}/>  
              <Route path="/:category" element= {<Home/>}/>  
            </Route>
    </Routes>

  );
}

export default App;
