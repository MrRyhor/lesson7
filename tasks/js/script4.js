
function getSeveralMathOption() {
    let sumEvenNum = 0
    if (num1 % 2 === 0) sumEvenNum = sumEvenNum + 1
    if (num2 % 2 === 0) sumEvenNum = sumEvenNum + 1
    if (num3 % 2 === 0) sumEvenNum = sumEvenNum + 1

    let sumPositiveNum = 0
    if (num1 > 0) sumPositiveNum = sumPositiveNum + 1
    if (num2 > 0) sumPositiveNum = sumPositiveNum + 1
    if (num3 > 0) sumPositiveNum = sumPositiveNum + 1

    let sumMoreThan100 = 0
    if (num1 > 100) sumMoreThan100 = sumMoreThan100 + 1
    if (num2 > 100) sumMoreThan100 = sumMoreThan100 + 1
    if (num3 > 100) sumMoreThan100 = sumMoreThan100 + 1

    return [`SumEvenNum = ${sumEvenNum},<br> SumPositiveNum = ${sumPositiveNum},<br> SumMoreThan100 = ${sumMoreThan100}`]

}

const num1 = parseFloat(prompt('Please enter num1:'))
const num2 = parseFloat(prompt('Please enter num2:'))
const num3 = parseFloat(prompt('Please enter num3:'))

const result = getSeveralMathOption()

result1.innerHTML = `${result}`