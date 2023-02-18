import React, { useState, useEffect } from "react";
import Light from "../Light/Light";
import './LightContainer.scss';

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

    function switchSingleLight(id: number) {
        const adjacentVertical = groupOfLights.length % 6 === 0 ? 6 : (groupOfLights.length % 5 === 0 ? 5 : 4);
        // continue with selection
    };

return (
    <section className="groupOfLights">
        {newLights}
    </section>
)

}

export default LightContainer;