import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Create from './pages/Create';
import home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './pages/Update';
import Header from './Components/Header';

// import Create from './pages/Create';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="text-black text-center text-4xl">
        <Switch>
          <Route exact path='/' component={home} />
          <Route path='/Update' component={Update} />
          <Route path='/create' component={Create} />
        </Switch>
      </div>

    </BrowserRouter>


  );
}

export default App;
