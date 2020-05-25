import React from 'react';
import PropTypes from 'prop-types';

const StatOption = ({ option, value }) => (
    <p>
        {option}: {value}
    </p>
);

StatOption.propTypes = {
    option: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default StatOption;
