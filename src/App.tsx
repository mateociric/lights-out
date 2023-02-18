import React, { useState } from 'react';
import LightContainer from './LightContainer/LightContainer';
import GameControl from './GameControl/GameControl';

function App() {

  const [initialLightsCondition, setInitialLightsCondition] = useState<boolean[]>([]);

  function createLights(event: React.MouseEvent<HTMLButtonElement>) {
    const numOfLights = (((event.target as any).value));
    setInitialLightsCondition(Array(+numOfLights).fill(true).map(() => !!Math.round(Math.random())));
  }

  return (
    <>
      <LightContainer initialLightsCondition={initialLightsCondition} />
      <GameControl onClick={createLights} />
    </>
  )
}

export default App;
