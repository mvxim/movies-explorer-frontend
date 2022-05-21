const getFormattedDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration % 60);
    
    let hoursWithPostfix = '';
    let minutesWithPostfix = '';
    
    if (hours % 10 === 1) {
        hoursWithPostfix = `${ hours } час`;
    } else if (hours % 10 >= 2 && hours % 10 <= 4) {
        hoursWithPostfix = `${ hours } часа`;
    } else if (hours % 10 >= 5 && hours % 10 <= 9 || hours % 10 === 0) {
        hoursWithPostfix = `${ hours } часов`;
    }
    
    if (minutes % 10 === 1) {
        minutesWithPostfix = `${ minutes } минута`;
    } else if (minutes % 10 >= 2 && minutes % 10 <= 4 && minutes < 10) {
        minutesWithPostfix = `${ minutes } минуты`;
    } else if (
        (minutes >= 11 && minutes <= 19) ||
        minutes % 10 >= 5
        && minutes % 10 <= 9
        || minutes % 10 === 0
    ) {
        minutesWithPostfix = `${ minutes } минут`;
    }
    
    if (hours === 0) {
        return `${ minutesWithPostfix }`;
    } else if (minutes === 0) {
        return `${ hoursWithPostfix }`;
    } else {
        return `${ hoursWithPostfix } ${ minutesWithPostfix }`;
    }
    
};
export default getFormattedDuration;
