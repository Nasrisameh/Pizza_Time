import './App.css';

import {Routes,Route,Navigate} from 'react-router-dom'
import PizzaList from './components/PizzaList';
import Create from './components/Create';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<CountriesList/>} /> */}
        {/* Route home */}
        <Route path='/' element={<Navigate to="/pizza"/>}/>
        {/*  Route pizza list */}
        <Route path='/pizza' element={<PizzaList/>}/>
        {/* Route create */}
        <Route path='/create' element={<Create/>}/>
        {/* Route ShowOne */}
        {/* <Route path='/show/:id' element={<ShowForm/>}/> */}
      </Routes>
    </>
  );
}

export default App;

