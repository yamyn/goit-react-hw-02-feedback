import React, { Component } from 'react';

import styles from './App.module.css';

import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

export default class App extends Component {
    state = { good: 0, neutral: 0, bad: 0 };

    options = Object.keys(this.state);

    countTotalFeedback = () =>
        this.options.reduce((acc, option) => this.state[option] + acc, 0);

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        if (!total) return 'not positive feedbacks';
        return `${Math.round(
            (this.state.good / this.countTotalFeedback()) * 100,
        )}%`;
    };

    addFeedback = e => {
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
                    <Section title="Please leave feedback">
                        <FeedbackOptions
                            options={this.options}
                            onAddFeedback={this.addFeedback}
                        />
                    </Section>
                    <Section title="Statistics">
                        {statistics.total !== 0 ? (
                            <Statistics
                                options={statOpt}
                                statistics={statistics}
                            />
                        ) : (
                            <Notification message="No feedback given" />
                        )}
                    </Section>
                </div>
            </>
        );
    }
}
