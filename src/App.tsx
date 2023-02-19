import React, { useState } from 'react';
import Header from './Header/Header';
import LightContainer from './LightContainer/LightContainer';
import GameControl from './GameControl/GameControl';

function App() {

  const [initialLightsCondition, setInitialLightsCondition] = useState<boolean[]>([]);

  const title = 'LIGHTS OUT GAME';

  function createLights(event: React.MouseEvent<HTMLButtonElement>) {
    const numOfLights = (((event.target as any).value));
    setInitialLightsCondition(Array(+numOfLights).fill(true).map(() => !!Math.round(Math.random())));
  }

  return (
    <>
      <Header title={title} />
      <LightContainer initialLightsCondition={initialLightsCondition} />
      <GameControl onClick={createLights} />
    </>
  )
}

export default App;
