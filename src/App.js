import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { WatchList } from './views/WatchList'
import { Watched } from './views/Watched'
import { Add  } from './views/Add'

import { GlobalProvider } from './context/GlobalState'

import './App.css';
import './lib/font-awesome/css/all.min.css'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <WatchList />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
