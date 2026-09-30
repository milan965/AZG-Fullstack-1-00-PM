
import {BrowserRouter,Routes, Route } from 'react-router-dom';

import ViewUser from './pages/View';
import Add from './pages/Add';
import Edit from './pages/Edit';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<ViewUser/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>


        </Routes>
      </BrowserRouter>
      
  )
}

export default App
