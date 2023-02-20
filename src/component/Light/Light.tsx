import './Light.scss';

function Light(props: { isLightOn: boolean, id: number, onClick: Function }) {
    const isLightOn = props.isLightOn ? 'box-is-light' : 'box-is-dark';

    return <div onClick={() => props.onClick(props.id)} className={`box ${isLightOn}`}></div>
}

export default Light;