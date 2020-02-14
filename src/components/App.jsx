import React from 'react';
import Header from './Header';
import Patron from './Patron';
import Employee from './Employee';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import NewKegControl from './NewKegControl';
import { Home } from './Home';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/patron' component={Patron} />
        <Route path='/employee' component={Employee} />
        {/* <Route path='/newKeg' component={NewKegForm} /> */}
        <Route path='/kegList' component={KegList} />
        <Route path='/newKeg' component={NewKegControl} />
      </Switch>
    </div>
  );
}

export default App;