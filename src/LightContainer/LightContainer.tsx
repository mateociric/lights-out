import React, { useState, useEffect } from "react";
import Light from "../Light/Light";
import './LightContainer.scss';
import adjacentLightsSwitched from "./utility/adjacentLightsSwitched";

function LightContainer(props: { initialLightsCondition: boolean[] }) {

    const [groupOfLights, setGroupOfLights] = useState<boolean[]>([]);

    useEffect(() => {
        setGroupOfLights(props.initialLightsCondition);
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
    const startMsg = newLights.length > 0 ? newLights : <p className="start-msg">Switch OFF ALL LIGHTS</p>

    function switchSingleLight(id: number) {
        const switchedLights = adjacentLightsSwitched(id, adjacentVerticalBoxSelect, groupOfLights);
        setGroupOfLights(switchedLights);
    };

    return (
        <section className='groupOfLights' style={ {gridTemplateColumns: `repeat(${adjacentVerticalBoxSelect}, 1fr)`} }>
            {startMsg}
        </section>
    )

}

export default LightContainer;