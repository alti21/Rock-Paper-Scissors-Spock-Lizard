import React from 'react';
import Choice from './Choice';

function Choices({ choices }) {
  return choices.map((choice) => <Choice choice={choice} />);
}

export default Choices;
