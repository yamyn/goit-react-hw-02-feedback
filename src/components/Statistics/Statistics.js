import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { list } from './Statistics.module.css';
import Notification from '../Notification/Notification';
import StatOption from './StatOption';

export default class Statistics extends Component {
    static propTypes = {
        statistics: PropTypes.objectOf(PropTypes.number).isRequired,
    };

    options = Object.keys(this.props.statistics);

    countTotalFeedback = () =>
        this.options.reduce(
            (acc, option) => this.props.statistics[option] + acc,
            0,
        );

    countPositiveFeedbackPercentage = () =>
        `${Math.round(
            (this.props.statistics.good / this.countTotalFeedback()) * 100,
        )}%`;

    render() {
        const { statistics } = this.props;

        const listStatistics = {
            ...statistics,
            total: this.countTotalFeedback(),
            'positive feedback': this.countPositiveFeedbackPercentage(),
        };
        const listOptions = Object.keys(listStatistics);
        return (
            <>
                {listStatistics.total !== 0 ? (
                    <ul className={list}>
                        {listOptions.map(option => (
                            <li key={option}>
                                <StatOption
                                    option={option}
                                    value={listStatistics[option]}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Notification message="No feedback given" />
                )}
            </>
        );
    }
}
