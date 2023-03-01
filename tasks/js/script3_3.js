function getMin(c1, c2, c3, c4) {
    let min = c1
    if (c2 < min) min = c2
    if (c3 < min) min = c3
    if (c4 < min) min = c4
    return min
}

const enterNum1 = parseFloat(prompt('Please enter num1:'))
const enterNum2 = parseFloat(prompt('Please enter num2:'))
const enterNum3 = parseFloat(prompt('Please enter num3:'))
const enterNum4 = parseFloat(prompt('Please enter num4:'))

const minNum = getMin(enterNum1, enterNum2, enterNum3, enterNum4)

result1.innerHTML = `Min Number = ${minNum}`