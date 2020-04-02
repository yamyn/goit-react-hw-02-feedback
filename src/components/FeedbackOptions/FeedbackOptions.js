import React from 'react';
import PropTypes from 'prop-types';

import { list, item } from './FeedbackOptions.module.css';
import Feedbackcontrol from './Feedbackcontrol';

const FeedbackOptions = ({ options, onAddFeedback }) => (
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

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,

    onAddFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
