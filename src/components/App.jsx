import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
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
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
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
    var newKegId = v4();
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    newMasterKegList[newKegId].formattedWaitTime = newMasterKegList[newKegId].timeOpen.fromNow(true);
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(kegId){
    this.setState({selectedKeg: kegId});
  }

  render(){
    return (
      <div className="background" style={appStyle}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/patron' component={Patron} />
          <Route path='/kegList' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newKeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/edit' component={Edit} />
          <Route path='/employee' render={(props)=><Employee kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} />}
            onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;