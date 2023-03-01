function getImage(randomImage) {
    let result
    switch (randomImage) {
        case 1: result = img1
            break;
        case 2: result = img2
            break;
        case 3: result = img3
            break;
        case 4: result = img4
            break;
        default: result = 'Error'
            break;
    }
    return result
}
alert('Вывести рандомное изображение?')
const img1 = `<img src = "/tasks/img/pear_1.jpg" >`
const img2 = `<img src = '/tasks/img/strawberry_2.jpg'>`
const img3 = `<img src = '/tasks/img/banana_3.jpg>`
const img4 = `<img src = '/tasks/img/lemon_4.jpg'>`

const minNumImage = 1,
    maxNumImage = 4
let randomImage = minNumImage + Math.floor(Math.random() * (maxNumImage - minNumImage + 1))
console.log(randomImage)

result1.innerHTML = getImage(randomImage)

