function getMiles(distanceInKm) {
    const convertKmInMiles = 0.621371
    const distanceInMiles = distanceInKm * convertKmInMiles
    return distanceInMiles
}

const distanceInKm = parseFloat(prompt('Введите расстояние в КМ:'))

const distanceInMiles = getMiles(distanceInKm)

result1.innerHTML = `Distance In Miles = ${distanceInMiles.toFixed(2)}`