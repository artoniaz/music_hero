import React, { Component } from 'react';

import TabType from './TabType';
import musicAPI from '../musicAPI';

class Search extends Component {

    state = {
        userInput: '',
        tabValue: '',
    };

    callSearch = async e => {
        e.preventDefault();
        const musicData = await musicAPI(this.state.userInput);

        this.props.getMusicData(musicData);
        this.setState({ userInput: '' });
    };

    handleUserInput = e => {
        const userInput = e.target.value;
        this.setState({ userInput });
    };

    getTabValue = e => {
        let tabValue = e.target.attributes['tabvalue'].value;
        if (tabValue === this.state.tabValue) {
            tabValue = '';
        }
        this.props.getTabValue(tabValue);
        this.setState({ tabValue });
    };

    render() {

        const { tabTypes } = this.props;
        const types = tabTypes.map(type => (
            <TabType tabType={type} key={type} activeTab={this.state.tabValue} getTabValue={this.getTabValue} />
        ));

        return (
            <form className='searchForm' onSubmit={this.callSearch}>
                <h2 className='searchForm__title'>search</h2>
                <p className='searchForm__tabExplanation'>Choose your prefered tab type</p>
                <div className="musicRecord__tabTypes musicRecord__tabTypes--mainSearch">
                    { types }
                </div>
                <p className='searchForm__subTitle'>Type artist's name or track's title</p>
                <input className='searchForm__searchInput' type="text" placeholder="Leonard Cohen or Hallelujah" onChange={this.handleUserInput} value={this.state.userInput} />
                <button type='submit' className='searchForm__button' disabled={(this.state.userInput && this.state.tabValue) ? false : true}>search</button>
            </form>
        )
    }
}

export default Search;