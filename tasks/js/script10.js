function getAveragePositiveTemperatures() {
    for (let i = 0; i < 10; i++) {
        enterTemperature = parseInt(prompt(`Введите показатели температуры за 10 дней. День ${i + 1}:`))
        if (enterTemperature > 0) {
            sumPositiveTemperatures += enterTemperature
            counterPositiveTempDay++
        }
        averagePositiveTemperature = sumPositiveTemperatures / counterPositiveTempDay
    }
    return [`Средняя плюсовая температура = <span>${averagePositiveTemperature}</span> град. За <span>${counterPositiveTempDay}</span> дней`]
}

let enterTemperature,
    averagePositiveTemperature,
    sumPositiveTemperatures = 0,
    counterPositiveTempDay = 0

result1.innerHTML = getAveragePositiveTemperatures()