function getInch(lenghtCm) {
    const convertCmInInch = 0.39370078740157
    const lenghtInch = lenghtCm * convertCmInInch
    return lenghtInch
}

const lenghtInCm = parseFloat(prompt('Введите длину в СМ:'))

const lenghtInInch = getInch(lenghtInCm)

result1.innerHTML = `Lenght in Inch = ${lenghtInInch.toFixed(2)}`