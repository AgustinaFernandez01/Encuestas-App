import { Routes, Route } from 'react-router-dom';

import Home from './views/home'
// import Consult from './views/consult/consult';
// import Error from './views/error/error';
// import Survey from './views/survey/survey';
// import UpdateSurvey from './views/updateSurvey/updateSurvey';

import NavBar from './components/navBar/navBar'



function App() {
  
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>  
    </>
  );
}

export default App;