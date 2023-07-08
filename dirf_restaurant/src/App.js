
import './App.css';
import Restaurant from './components/Restaurant';
import { Switch, Link, Route, Router, useLocation, Routes} from 'react-router-dom';

import Pchefs from "./components/pages/Pchefs";

function App() {
  return (
    <>
       <Pchefs/>
      {/* <Restaurant/> */}

      <div className='header'>
          
      </div>
    </>
  );
}

export default App;
