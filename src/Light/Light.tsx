import React from 'react'
import './Light.scss';

function Light(props: { isLightOn: boolean, id: number, onClick: Function }) {

    const isLightOn = props.isLightOn ? 'light' : 'dark';

    return <div onClick={() => props.onClick(props.id)} className={`light-box ${isLightOn}`}></div>

}

export default Light;