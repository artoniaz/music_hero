import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import TabType from './TabType';

import musicAPI from '../musicAPI';

class Search extends Component {

    state = {
        userInput: '',
        tabValue: '',
        miniSearch: false
    };

    callSearch = async e => {
        e.preventDefault();
        const musicData = await musicAPI(this.state.userInput);
        if (musicData.length === 0) {
            this.setState({ userInput: '' });
            return this.props.toggleModal(true, "We couldn't find what you are looking for.", "Please make sure you typed artist's name or song title correctly.");
        }
        this.props.getMusicData(musicData, this.state.userInput);
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

    handleScroll = e => {
        if (window.scrollY < 150 && this.state.miniSearch) {
            this.setState({ miniSearch: false });
            console.log('duże');
        }
        else if (window.scrollY >= 150 && !this.state.miniSearch) {
            this.setState({ miniSearch: true });
            console.log('małe');
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmout() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {

        const { miniSearch } = this.state;
        const { tabTypes } = this.props;
        const types = tabTypes.map(type => (
            <TabType tabType={type} key={type} activeTab={this.state.tabValue} getTabValue={this.getTabValue} />
        ));

        return (
            <AnimateHeight duration={300} height='auto'>
                <form className={miniSearch ? 'searchForm searchForm--mini' : 'searchForm'} onSubmit={this.callSearch}>
                    {miniSearch ? null : <h2 className='searchForm__title'>search</h2>}
                    <p className='searchForm__tabExplanation'>Choose your prefered tab type</p>
                    <div className="musicRecord__tabTypes musicRecord__tabTypes--mainSearch">
                        {types}
                    </div>
                    {miniSearch ? null :
                        <div>
                            <p className='searchForm__subTitle'>Type artist's name or track's title</p>
                            <input className='searchForm__searchInput' type="text" placeholder="Leonard Cohen or Hallelujah" onChange={this.handleUserInput} value={this.state.userInput} />
                            <button type='submit' className='searchForm__button' disabled={(this.state.userInput && this.state.tabValue) ? false : true}>search</button>
                        </div>}
                </form>
            </AnimateHeight>
            // <form className={miniSearch ? 'searchForm searchForm--mini' : 'searchForm'} onSubmit={this.callSearch}>
            //     {miniSearch ? null : <h2 className='searchForm__title'>search</h2>}
            //     <p className='searchForm__tabExplanation'>Choose your prefered tab type</p>
            //     <div className="musicRecord__tabTypes musicRecord__tabTypes--mainSearch">
            //         {types}
            //     </div>
            //     {miniSearch ? null :
            //         <div>
            //             <p className='searchForm__subTitle'>Type artist's name or track's title</p>
            //             <input className='searchForm__searchInput' type="text" placeholder="Leonard Cohen or Hallelujah" onChange={this.handleUserInput} value={this.state.userInput} />
            //             <button type='submit' className='searchForm__button' disabled={(this.state.userInput && this.state.tabValue) ? false : true}>search</button>
            //         </div>}
            // </form>
        )
    }
}

export default Search;