import React from 'react';
import PropTypes from 'prop-types';
import Choice from './Choice';

function Choices({ choices }) {
  // const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  return (
    <div>
      {choices.map((choice) => (
        <Choice key={choice.id} choice={choice.name} />
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
