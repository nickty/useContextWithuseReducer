
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from "./components/Home";
import Page from "./components/Page";


function App() {

 
  
 return (
   <div className="app">
     <h1>Context example</h1>
     <Router>
       <nav>
         <ul>
           <li>
             <Link to="/home">Home</Link>
           </li>
           <li>
             <Link to="/page">Page</Link>
           </li>
         </ul>
       </nav>

       <Routes>
         <Route exact path="/home" element={<Home />} />
         <Route exact path="/page" element={<Page />}/>
       </Routes>
     </Router>
   </div>
 )
}

export default App;
