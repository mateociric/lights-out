import React, { useState } from 'react';
import Header from './component/Header/Header';
import LightContainer from './component/LightContainer/LightContainer';
import GameControl from './component/GameControl/GameControl';

function App() {

  const [initialLightsCondition, setInitialLightsCondition] = useState<boolean[]>([]);

  const title = 'LIGHTS OUT GAME';

  function createLights(event: React.MouseEvent<HTMLButtonElement>) {
    const numOfLights = (((event.target as any).value));
    //create random array of boolean values
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
