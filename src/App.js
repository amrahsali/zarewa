import './App.css';
import React from 'react';
import Navbar from './component/Navbar/index';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Transaction from './pages/transaction';
import Production from './pages/production'
import Accounting from './pages/accounting';
import Report from './pages/report';
import Management from './pages/management';
import Hr from './pages/hr';
import Settings from './pages/settings';





function App (){
return(
  <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element= {<Dashboard/>} />
        <Route path = '/transaction' element= {<Transaction/>} />
        <Route path = '/production' element= {<Production/>} />
        <Route path = '/accounting' element= {<Accounting/>} />
        <Route path = '/report' element= {<Report/>} />
        <Route path = '/management' element= {<Management/>} />
        <Route path = '/hr' element= {<Hr/>} />
        <Route path = '/settings' element= {<Settings/>} />
      </Routes>

  </Router>

);

}

export default App;
