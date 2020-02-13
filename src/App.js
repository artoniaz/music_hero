import React, { Component } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import Footer from './components/Footer';

import './style/css/App.css';

class App extends Component {

  state = {
    musicData: [],
    tabValue: ''
  }

  tabTypes = ['PLAYER', 'TEXT_GUITAR_TAB', 'CHORDS', 'TEXT_BASS_TAB'];

  getMusicData = musicData => {
    this.setState({ musicData });
  };

  getTabValue = tabValue => {
    this.setState({ tabValue });
  };

  componentDidUpdate () {
    // console.log(this.state);
  }

  render() {
    return (
      <div className='mainContainer' >
        <Header className='header' />
        <div className='contentContainer'>
          <Search  getMusicData={this.getMusicData} getTabValue={this.getTabValue} tabTypes={this.tabTypes} />
          <Results data={this.state.musicData} tabValue={this.state.tabValue} />
        </div>
        <Footer className='footer' />
      </div>
    );
  }
}

export default App;
