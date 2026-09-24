
import {BrowserRouter,Routes, Route } from 'react-router-dom';

import ViewUser from './pages/View';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<ViewUser/>}/>
        </Routes>
      </BrowserRouter>
      
  )
}

export default App
