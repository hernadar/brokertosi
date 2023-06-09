import React from 'react';
import '../assets/css/main.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';



function App() {
  return (
   
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route  index element={<Home />} />
    
    
    </Route>
    </Routes>  
   
  );
}

export default App;
