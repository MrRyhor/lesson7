function getNegativeTemperature() {
    for (let i = 0; i < 10; i++) {
        enterTemperature = parseInt(prompt(`Введите показатели температуры за 10 дней. День ${i + 1}:`))
        if (enterTemperature < 0) sumNegativeTemperatures += 1
    }
    return sumNegativeTemperatures
}

let enterTemperature,
    sumNegativeTemperatures = 0

result1.innerHTML = `Кол-во дней с минусовой температурой = ${getNegativeTemperature()}`
