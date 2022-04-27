import React from 'react';
import PropTypes from 'prop-types';
import Choice from '../input/Choice';

function ResultsDisplay({ choices, gameResults }) {
  const playerChoice = choices.find(
    (choice) => choice.id === gameResults.player
  );
  const cpuChoice = choices.find(
    (choice) => choice.id === gameResults.computer
  );

  return (
    <div>
      {playerChoice !== undefined ? <Choice choice={playerChoice} /> : null}
      {gameResults.results}
      {cpuChoice !== undefined ? <Choice choice={cpuChoice} /> : null}
    </div>
  );
}

export default ResultsDisplay;

ResultsDisplay.propTypes = {
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  gameResults: PropTypes.shape({
    computer: PropTypes.number.isRequired,
    player: PropTypes.number.isRequired,
    results: PropTypes.string.isRequired,
  }).isRequired,
};
