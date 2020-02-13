import React from 'react';

import MusicRecord from './MusicRecord';

const Results = props => {

    const { tabValue } = props;

    const allRecords = props.data.map(record => (
        <MusicRecord key={record.id} recordData={record} activeTab={tabValue}/>
    ));

    const filteredRecords = allRecords.filter(record => {
        const tabTypes = [...record.props.recordData.tabTypes];
        if (tabTypes.indexOf(tabValue) !== -1 ) return record
        else return null;
    })

    return (
        <div className='results'>
            <h1 className='results__title'>Your songs: </h1>
            { filteredRecords }
        </div>
    )
}

export default Results;