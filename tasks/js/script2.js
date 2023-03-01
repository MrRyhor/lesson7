function getTypeOfDay(numDay) {
    let result
    switch (numDay) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: result = 'Working Day'
            break;
        case 6:
        case 7: result = 'Weekend'
            break;
        default: result = 'Error'
            break;
    }
    return result
}

const numDay = parseInt(prompt('Please enter number of day:'))

result1.innerHTML = getTypeOfDay(numDay)