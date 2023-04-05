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
    setInitialLightsCondition(Array.from({ length: +numOfLights }, () => {
      return !!Math.round(Math.random())
    }))
  }

  console.log(initialLightsCondition);

  return (
    <>
      <Header title={title} />
      <LightContainer initialLightsCondition={initialLightsCondition} />
      <GameControl onClick={createLights} />
    </>
  )
}

export default App;
