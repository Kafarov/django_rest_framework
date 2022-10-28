import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";

import {Layout} from './components/Layout';
import Userpage from './pages/Userpage'
import Todopage from './pages/Todopage';
import Projectpage from './pages/Projectpage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Userpage />} />
          <Route path='/Todo' element={<Todopage />} />
          <Route path='/Project' element={<Projectpage />} />
        </Route>
      </Routes>
    </>
  )


}
 

export default App;
