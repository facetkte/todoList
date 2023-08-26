import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBarUI = (props) => {
    return (
        <div className='flex py-8'>
            <p className='text-body-large text-blue-4'>{props.percentage}%</p>
            <ProgressBar className='w-full pt-2 pl-2' bgColor='#7D7DFF' baseBgColor="#FFF" isLabelVisible={false} completed={props.percentage} />
        </div>
    );
}

export default ProgressBarUI
