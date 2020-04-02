import React from 'react';
import PropTypes from 'prop-types';

import { titleSection } from './Section.module.css';

const Section = ({ title, children }) => (
    <section className={titleSection}>
        <h2>{title}</h2>
        {children}
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,

    children: PropTypes.node.isRequired,
};

export default Section;
