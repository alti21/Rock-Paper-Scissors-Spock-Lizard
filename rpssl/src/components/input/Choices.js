import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Choice from './Choice';

function Choices({ choices }) {
  // const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  return (
    <div>
      {choices.map((choice) => (
        <Button>
          <Choice key={choice.id} choice={choice} />
        </Button>
      ))}
    </div>
  );
}

Choices.propTypes = {
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Choices;
