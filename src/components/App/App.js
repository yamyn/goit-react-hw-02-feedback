import React, { Component } from 'react';

import styles from './App.module.css';

import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';

export default class App extends Component {
    state = { good: 0, neutral: 0, bad: 0 };

    addFeedback = event => {
        const option = event.currentTarget.name;

        this.setState(state => ({
            [option]: state[option] + 1,
        }));
    };
    render() {
        return (
            <>
                <div className={styles.container}>
                    <h1>goit-react-hw-02-feedback</h1>
                    <Section title="Please leave feedback">
                        <FeedbackOptions
                            statistics={this.state}
                            onAddFeedback={this.addFeedback}
                        />
                    </Section>
                    <Section title="Statistics">
                        <Statistics statistics={this.state} />
                    </Section>
                </div>
            </>
        );
    }
}
