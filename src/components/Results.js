import React from 'react';

import MusicRecord from './MusicRecord';

const Results = props => {

    const { tabValue, userInput } = props;

    const allRecords = props.data.map(record => (
        <MusicRecord key={record.id} recordData={record} activeTab={tabValue}/>
    ));

    const filteredRecords = allRecords.filter(record => {
        const tabTypes = [...record.props.recordData.tabTypes];
        if (tabTypes.indexOf(tabValue) !== -1 ) return record
        else return null;
    })

    return (
        <main className='results'>
            <h1 className='results__title'>You are looking for {userInput}</h1>
            { filteredRecords }
        </main>
    )
}

export default Results;