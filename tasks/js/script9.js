function getNegativeTemperature(...temperature) {
    let countNegativesTemperatures = 0
    for (let i = 0; i < temperature.length; i++) {
        if (temperature[i] < 0) countNegativesTemperatures++
    }
    return countNegativesTemperatures
}

result1.innerHTML = `Сумма дней с минусовой температурой = <span>${getNegativeTemperature(-1, 2, 1, -2, 4, 0, -1, 0)}</span>`
