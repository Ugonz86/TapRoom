import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Admin from './Admin';
import Patron from './Patron';
import Employee from './Employee';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import Home from './Home';
import Edit from './Edit';
import Inventory from './Inventory';
import { v4 } from 'uuid';
import Moment from 'moment';
import Error404 from './Error404';
import beer from '../assets/images/beer.jpg';


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

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateKegElapsedWaitTime(),
    5000
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

  render(){
    return (
      // styles={{ backgroundImage:`url(${beer})` }}
      <div className="background">
        <style jsx global>{`
        html {
          background: url(${beer}) no-repeat center center fixed;
          background-size: cover;
        }
      `}</style>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/patron' component={Patron} />
          <Route path='/employee' component={Employee} />
          <Route path='/kegList' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newKeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/edit' component={Edit} />
          <Route path='/inventory' component={Inventory} />
          <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} />}
            onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg}/>} />
          {/* <Route path='/patron' component={Patron} /> */}
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;