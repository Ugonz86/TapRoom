import React from 'react';
import Header from './Header';
import Footer from './Footer';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Employee from './Employee';
import { v4 } from 'uuid';
import Patron from './Patron';
import Home from './Home';
import Edit from './Edit';

var appStyle = {
  fontFamily: 'Montserrat, sans-serif',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    const newMasterKegList = {};

    let newKegId = v4();
    newMasterKegList[newKegId] = {
      style: 'Dutch Pale Lager',
      brand: 'HEINEKEN',
      alcoholVolume: 5,
      price: 6.00,
    };

    newKegId = v4();
    newMasterKegList[newKegId] = {
      style: 'Pilsner',
      brand: 'STELLA ARTOIS',
      alcoholVolume: 4.8,
      price: 5.00
    };

    newKegId = v4();
    newMasterKegList[newKegId] = {
      style: 'Stout',
      brand: 'GUINNESS',
      alcoholVolume: 5.6,
      price: 4.00
    };

    newKegId = v4();
    newMasterKegList[newKegId] = {
      style: 'Hybrid',
      brand: 'KÖLSCH',
      alcoholVolume: 4.5,
      price: 3.00
    };

    newKegId = v4();
    newMasterKegList[newKegId] = {
      style: 'Specialty',
      brand: 'SCHOFFERHOFER',
      alcoholVolume: 2.5,
      price: 2.00
    };

    this.state = {
      masterKegList: newMasterKegList,
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
    this.handleEditKeg = this.handleEditKeg.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateKegElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateKegElapsedWaitTime() {
    var newMasterKegList = Object.assign({}, this.state.masterKegList);
    Object.keys(newMasterKegList).forEach(kegId => {
      newMasterKegList[kegId].formattedWaitTime = (newMasterKegList[kegId].timeOpen).fromNow(true);
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleAddingNewKegToList(newKeg){
    const newKegId = v4();
    const newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg});
    newMasterKegList[newKegId].formattedWaitTime = newMasterKegList[newKegId].timeOpen.fromNow(true);
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(kegId){
    this.setState({selectedKeg: kegId});
  }

  handleManageKeg(managedKeg) {
    const newMasterKegList = Object.assign({}, this.state.masterKegList, {[managedKeg.id]: managedKeg});
    this.setState({masterKegList: newMasterKegList});
  }

  handleEditKeg(updatedKeg) {
    const newMasterKegList = Object.assign({}, this.state.masterKegList, {[updatedKeg.id]: updatedKeg});
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return (
      <div style={appStyle}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/patron' render={(props)=><Patron kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} />}
            onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg}/>} />
          <Route path='/kegList' render={()=><KegList kegList={this.state.masterKegList}/>} />
          <Route path='/newKeg' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/edit' render={()=> <Edit onEditKeg={this.handleEditKeg}/>} />
          <Route path='/employee' render={(props)=><Employee kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} employee={true} onEditKeg={this.handleEditKeg}/>}
            onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg}/>} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default App;