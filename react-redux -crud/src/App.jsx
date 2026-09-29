
import {BrowserRouter,Routes, Route } from 'react-router-dom';

import ViewUser from './pages/View';
import Add from './pages/Add';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<ViewUser/>}/>
            <Route path="/add" element={<Add/>}/>

        </Routes>
      </BrowserRouter>
      
  )
}

export default App
