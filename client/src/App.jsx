import { Routes, Route } from 'react-router-dom';

import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import Error from './views/error/Error';
import Update from './views/updateAnswer/Update';

import NavBar from './components/navBar/navBar'



function App() {
  
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>  
    </>
  );
}

export default App;