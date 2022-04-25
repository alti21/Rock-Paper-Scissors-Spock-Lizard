import React, { useState, useEffect } from 'react';
import { getAllChoices } from '../api/GameAPI';
import Choices from '../components/input/Choices';

function Main() {
  const [choiceList, setChoiceList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Choices choices={choiceList} />
    </div>
  );
}

export default Main;