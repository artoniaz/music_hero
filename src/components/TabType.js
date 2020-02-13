import React from 'react';

const TabType = props => {

    let { tabType, activeTab, getTabValue } = props;
    const tabValue = tabType;

    if (tabType === 'TEXT_GUITAR_TAB') {
        tabType = 'guitar'.toUpperCase();
    } else if (tabType === 'TEXT_BASS_TAB') {
        tabType = 'bass'.toUpperCase();
    }

    return (
        <div
            className={activeTab === tabValue ? 'musicRecord__tabType musicRecord__tabType--active' : 'musicRecord__tabType'}
            onClick={getTabValue}
            tabvalue={tabValue}
        >
            {tabType}
        </div>
    )
};

export default TabType;
