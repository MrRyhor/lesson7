function getAveragePositiveTemperatures(...temperature) {
    for (let i = 0; i < temperature.length; i++) {
        if (temperature[i] > 0) {
            sumPositiveTemperatures += temperature[i]
            counterPositiveTempDay++
        }
        averagePositiveTemperature = sumPositiveTemperatures / counterPositiveTempDay
    }
    return [`Средняя плюсовая температура = <span>${averagePositiveTemperature}</span> град. За <span>${counterPositiveTempDay}</span> дней`]
}

let averagePositiveTemperature,
    sumPositiveTemperatures = 0,
    counterPositiveTempDay = 0

result1.innerHTML = getAveragePositiveTemperatures(-1, 0, 2, 1, 2, 0, -1, 2, 0, -1, 3, 2)