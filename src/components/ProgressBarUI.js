import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBarUI = (props) => {
    return (
        <div className='max-w-[90%] mx-auto flex items-center py-4'>
            <p className='text-body-large text-blue-4 pr-2'>{props.percentage}%</p>
            <ProgressBar
                className='flex-grow'
                bgColor='#7D7DFF' baseBgColor="#FFF"
                isLabelVisible={false}
                completed={props.percentage}
            />
        </div>
    );
}

export default ProgressBarUI
