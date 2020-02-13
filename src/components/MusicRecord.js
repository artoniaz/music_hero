import React from 'react';

import TabType from './TabType';

const MusicRecord = props => {

    const { title, tabTypes } = props.recordData;
    const { name } = props.recordData.artist;

    const tabTypesRecords = tabTypes.map(type => {
        const key = props.recordData.id + type;
        return <TabType key={key} tabType={type} activeTab={props.activeTab} />
    });

    return (
        <div className='musicRecord'>
            <h3 className='musicRecord__songTitle'>{title}</h3>
            <p className='musicRecord__artistName'>{name}</p>
            <div className='musicRecord__tabTypes'>
                {tabTypesRecords}
            </div>
        </div>
    )
}

export default MusicRecord;