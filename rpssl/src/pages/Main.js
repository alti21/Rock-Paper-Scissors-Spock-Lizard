import React, { useState, useEffect } from 'react';
import { getAllChoices, playRound } from '../api/GameAPI';
import Choices from '../components/input/Choices';
import ResultsDisplay from '../components/output/ResultsDisplay';

function Main() {
  const [choiceList, setChoiceList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [gameResults, setGameResults] = useState({});

  useEffect(() => {
    let unmounted = false;
    getAllChoices().then((response) => {
      if (!unmounted && response.data.length > 0) {
        setChoiceList(response.data);
        setIsLoading(false);
      } else if (!unmounted) setChoiceList([]);
    });
    return () => {
      unmounted = true;
    };
  }, []);

  const pickChoice = (choiceId) => {
    const playerChoice = {
      player: choiceId,
    };
    console.log(playerChoice);
    playRound(playerChoice).then((response) => {
      // console.log(response);
      setGameResults(response.data);
    });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <ResultsDisplay choices={choiceList} gameResults={gameResults} />
      <Choices choices={choiceList} pickChoice={pickChoice} />
    </div>
  );
}

export default Main;
