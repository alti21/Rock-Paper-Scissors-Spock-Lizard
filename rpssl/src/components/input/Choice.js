/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

function Choice({ choice }) {
  return (
    <figure>
      <img
        src={require(`../../assets/choices/${choice.name}.png`)}
        alt={choice.name}
        width="300"
        height="300"
      />
      <figcaption>{choice.name}</figcaption>
    </figure>
  );
}

Choice.propTypes = {
  choice: PropTypes.string.isRequired,
};

export default Choice;
