import React from 'react';

import MusicRecord from './MusicRecord';
import Spinner from './Loader';

const Results = props => {

    let { tabValue, userInput, data } = props;
    let message;

    const allRecords = data.map(record => (
        <MusicRecord key={record.id} recordData={record} activeTab={tabValue} />
    ));

    let filteredRecords = allRecords.filter(record => {
        const tabTypes = [...record.props.recordData.tabTypes];
        if (tabTypes.indexOf(tabValue) !== -1) return record
        else return null;
    });

    if (tabValue !== '' && data.length > 0) {
        message = <h1 className='results__title'>You are looking for {userInput}</h1>;
    } else if (tabValue === '' && data.length > 0) {
        message = <p className='results__title'>You are looking for {userInput} but you haven't choosen any tab type. Please click on your preferd tab type to select it.</p>;
    }
    else message = null;

    if (tabValue === 'TEXT_GUITAR_TAB') {
        tabValue = 'guitar'.toUpperCase();
    } else if (tabValue === 'TEXT_BASS_TAB') {
        tabValue = 'bass'.toUpperCase();
    };

    if (allRecords.length > 0 && filteredRecords.length === 0) {
        filteredRecords = <p className='results__noTabs'>There are no {tabValue} records matching {userInput}. Please choose another tab type.</p>;
    }

    return (
        <main className='results'>
            {data.length === 0 ?
                <>
                    <h1 className='results__primaryTitle'>Hello</h1>
                    <h2>Welcome in full tab types database.</h2>
                    <div className="resutls__img"></div>
                </> : null}
            {tabValue && userInput && data.length === 0 ? <Spinner /> :
                <>
                    {message}
                    {tabValue !== '' && data.length > 0 ? filteredRecords : null}
                </>
            }
        </main>
    )
}

export default Results;