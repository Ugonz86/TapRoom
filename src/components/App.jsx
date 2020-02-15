import React from 'react';
import Header from './Header';
import Patron from './Patron';
import Employee from './Employee';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegControl from './NewKegControl';
import Home from './Home';
import Edit from './Edit';
import Inventory from './Inventory';
import beer from '../assets/images/beer.jpg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return (
      // styles={{ backgroundImage:`url(${beer})` }}
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/patron' component={Patron} />
          <Route path='/employee' component={Employee} />
          <Route path='/kegList' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newKeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/edit' component={Edit} />
          <Route path='/inventory' component={Inventory} />
        </Switch>
      </div>
    );
  }

}

export default App;