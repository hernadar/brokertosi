import React from 'react';
import '../assets/css/main.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import Detail from './Detail';



function App() {
  return (
   <div>
  
   
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route  index element={<Home />} />
      <Route path='/property/:propertyId/' element={<Detail />} />
    
    </Route>
    </Routes>  
    </div>
  );
}

export default App;
