import React from 'react';
import PropTypes from 'prop-types';

import { statList } from './Statistics.module.css';
import StatOption from './StatOption';

const Statistics = ({ options, statistics }) => (
    <ul className={statList}>
        {options.map(option => (
            <li key={option}>
                <StatOption option={option} value={statistics[option]} />
            </li>
        ))}
    </ul>
);

Statistics.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,

    statistics: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
};

export default Statistics;
