import React, { useState, useEffect } from 'react'
import Light from "../Light/Light";
import './LightContainer.scss';
import adjacentLightsSwitched from "./utility/adjacentLightsSwitched";

function LightContainer(props: { initialLightsCondition: boolean[] }) {
    const [groupOfLights, setGroupOfLights] = useState<boolean[]>([]);
    const [isVictory, setIsVictory] = useState<boolean>(false);

    useEffect(() => {
        setGroupOfLights(props.initialLightsCondition);
        setIsVictory(false);
    }, [props.initialLightsCondition]);

    const newLights = groupOfLights.map((el, index) => {
        return <Light
            onClick={switchSingleLight}
            isLightOn={el}
            id={index}
            key={index}
        />
    });
    const adjacentVerticalBoxSelect = groupOfLights.length % 6 === 0 ? 6 : (groupOfLights.length % 5 === 0 ? 5 : 4);
    const content = isVictory ? <h1 className="start-msg">CONGRATULATION</h1> : (newLights.length ? newLights : <h1 className="start-msg">SWITCH OFF ALL LIGHTS</h1>);

    function switchSingleLight(id: number) {
        const switchedLights = adjacentLightsSwitched(id, adjacentVerticalBoxSelect, groupOfLights);
        setGroupOfLights(switchedLights);
        //check victory based on switchLights length
        const victoryLength = switchedLights.filter((el) => el === false);
        if (victoryLength.length === Math.pow(adjacentVerticalBoxSelect, 2)) {
            setIsVictory(true);
        }
    };

    return (
        <section className='groupOfLights' style={{ gridTemplateColumns: `repeat(${adjacentVerticalBoxSelect}, 1fr)` }}>
            {content}
        </section>
    )
}

export default LightContainer;