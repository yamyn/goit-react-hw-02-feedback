import React from 'react';
import PropTypes from 'prop-types';

import { list, item } from './FeedbackOptions.module.css';
import Feedbackcontrol from './Feedbackcontrol';

const FeedbackOptions = ({ statistics, onAddFeedback }) => {
    const options = Object.keys(statistics);
    return (
        <ul className={list}>
            {options.map(option => (
                <li key={option} className={item}>
                    <Feedbackcontrol
                        option={option}
                        onAddFeedback={onAddFeedback}
                    />
                </li>
            ))}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    statistics: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ).isRequired,
    onAddFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
