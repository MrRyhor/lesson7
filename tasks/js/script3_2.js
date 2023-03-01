function getAverage(c1, c2, c3, c4) {
    return (c1 + c2 + c3 + c4) / 4
}

const enterNum1 = parseFloat(prompt('Please enter num1:'))
const enterNum2 = parseFloat(prompt('Please enter num2:'))
const enterNum3 = parseFloat(prompt('Please enter num3:'))
const enterNum4 = parseFloat(prompt('Please enter num4:'))

const average = getAverage(enterNum1, enterNum2, enterNum3, enterNum4)

result1.innerHTML = `Average = ${average}`