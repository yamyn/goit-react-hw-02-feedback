import React from 'react';
import PropTypes from 'prop-types';

const Feedbackcontrol = ({ option, onAddFeedback }) => (
    <button type="button" onClick={onAddFeedback} name={option}>
        {option}
    </button>
);

Feedbackcontrol.propTypes = {
    option: PropTypes.string.isRequired,
    onAddFeedback: PropTypes.func.isRequired,
};

export default Feedbackcontrol;
