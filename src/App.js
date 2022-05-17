
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from "./components/Home";
import Page from "./components/Page";

import AppState from "./context/AppState";


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
      <AppState>
      <Routes>
         <Route exact path="/home" element={<Home />} />
         <Route exact path="/page" element={<Page />}/>
       </Routes>
      </AppState>
       
     </Router>
   </div>
 )
}

export default App;
