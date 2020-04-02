import React, { Component } from 'react';

import styles from './App.module.css';

export default class App extends Component {
    state = { good: 0, neutral: 0, bad: 0 };

    options = Object.keys(this.state);

    countTotalFeedback = () =>
        this.options.reduce((acc, option) => this.state[option] + acc, 0);

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        if (!total) return 'not positive feedbacks';
        return `${((this.state.good / this.countTotalFeedback()) * 100).toFixed(
            1,
        )}%`;
    };

    handleIncrement = e => {
        const option = e.currentTarget.name;

        this.setState(state => ({
            [option]: state[option] + 1,
        }));
    };
    render() {
        const statistics = {
            ...this.state,
            total: this.countTotalFeedback(),
            'positive feedback': this.countPositiveFeedbackPercentage(),
        };
        const statOpt = Object.keys(statistics);
        return (
            <>
                <div className={styles.container}>
                    <h1>goit-react-hw-02-feedback</h1>
                    <h2>Please leave feedback</h2>
                    <ul className={styles.optionList}>
                        {this.options.map(option => (
                            <li key={option} className={styles.optionListItem}>
                                <button
                                    type="button"
                                    onClick={this.handleIncrement}
                                    name={option}
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <h2>Statistics</h2>
                    <ul className={styles.statList}>
                        {statOpt.map(option => (
                            <li key={option}>
                                <p>
                                    {option}: {statistics[option]}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}
