const getSleepHours = day =>{
    switch(day.toLowerCase()){
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 8
            break;
        case 'wednesday':
            return 8
            break;
        case 'thursday':
            return 8
            break;
        case 'friday':
            return 8
            break;
        case 'saturday':
            return 8
            break;
        case 'sunday':
            return 8
            break;
            default:
                return "Error!"
    }
}

function getActualSleepHours(){
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}

function getIdealSleepHours(){
    const idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleep = getActualSleepHours();
    const idealSleep = getIdealSleepHours();
    
}