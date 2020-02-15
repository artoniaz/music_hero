import React, { Component } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import Footer from './components/Footer';
import Modal from './components/Modal';

import './style/css/App.css';

class App extends Component {

  state = {
    musicData: [],
    userInput: '',
    tabValue: '',
    modal: {
      show: false,
      title: '',
      message: ''
    }
  }

  tabTypes = ['PLAYER', 'TEXT_GUITAR_TAB', 'CHORDS', 'TEXT_BASS_TAB'];

  getMusicData = (musicData, userInput) => {
    this.setState({ musicData, userInput });
  };

  getTabValue = tabValue => {
    this.setState({ tabValue });
  };

  toggleModal = (showModal, modalTitle, modalMessage) => {
    this.setState({ modal: {
      show: showModal,
      title: modalTitle,
      message: modalMessage
    } });
  }

  render() {
    return (
        <div className='mainContainer' >
          {this.state.modal.show ? <Modal title={this.state.modal.title} message={this.state.modal.message} toggleModal={this.toggleModal} /> : null}
          <Header />
          <div className='contentContainer'>
            <Search getMusicData={this.getMusicData} getTabValue={this.getTabValue} tabTypes={this.tabTypes} toggleModal={this.toggleModal}/>
            <Results data={this.state.musicData} tabValue={this.state.tabValue} userInput={this.state.userInput} toggleModal={this.toggleModal} />
          </div>
          <Footer />
        </div>
    );
  }
}

export default App;
