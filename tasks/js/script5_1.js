function getPound(weightInKg) {
    const convertKgInPound = 2.2046226
    const weightInPound = weightInKg * convertKgInPound
    return weightInPound
}

const weightInKg = parseFloat(prompt('Введите вес в КГ:'))

const weightInPound = getPound(weightInKg)

result1.innerHTML = `Weight In Pound = ${weightInPound.toFixed(2)}`