function getSeason(numMonth) {
    let result
    switch (numMonth) {
        case 12:
        case 1:
        case 2: result = 'Winter'
            break;
        case 3:
        case 4:
        case 5: result = 'Spring'
            break;
        case 6:
        case 7:
        case 8: result = 'Summer'
            break;
        case 9:
        case 10:
        case 11: result = 'Autmn'
            break;
        default: result = 'Error'
            break;
    }
    return result
}

const numMonth = parseInt(prompt('Please enter number of Month:'))

result1.innerHTML = getSeason(numMonth)