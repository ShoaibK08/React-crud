import React from 'react'
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




function App() {
  return (
    <Router>

      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>

          <Route exact path='/create' element={<Create/>} />


          <Route exact path='/read' element={<Read/>} />


          <Route path='/update' element={<Update/>} />
        </Routes>
      </div>


    </Router>
  );
}



export default App
