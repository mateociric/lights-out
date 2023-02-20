function adjacentLightsSwitched(id: number, verticalValue: number, arrOfLights: boolean[]) {
    const switchedLights = arrOfLights.map((el, index) => {
        //trigger clicked box
        id === index && (el = !el);
        //trigger nearest vertical box
        id - verticalValue === index && (el = !el);
        id + verticalValue === index && (el = !el);
        //trigger nearest horizontal box from the first and last column (first column module is 0)
        !(id % verticalValue) && id + 1 === index && (el = !el);
        id % verticalValue === verticalValue - 1 && id - 1 === index && (el = !el);
        //trigger nearest boxes between first and last column (last column module is greater than other columns)
        id % verticalValue !== 0 && id % verticalValue !== verticalValue - 1 && id - 1 === index && (el = !el);
        id % verticalValue !== 0 && id % verticalValue !== verticalValue - 1 && id + 1 === index && (el = !el);

        return el
    });
    return switchedLights;
}

export default adjacentLightsSwitched;