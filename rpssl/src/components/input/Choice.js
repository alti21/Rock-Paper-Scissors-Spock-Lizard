/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

function Choice({ choice }) {
  return (
    <Button>
      <img
        src={require(`../../assets/choices/${choice}.png`)}
        alt={choice}
        width="300"
        height="300"
      />
    </Button>
  );
}

Choice.propTypes = {
  choice: PropTypes.string.isRequired,
};

export default Choice;
