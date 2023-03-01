function getBanner() {
    return document.write(`<a href="https://${linkBanner}"><img src="${imgBanner}" alt="${nameBanner}"></a>`)
}

const imgBanner = prompt(`Введите ссылку на изображени:`)
const nameBanner = prompt(`Введите название баннера:`)
const linkBanner = prompt(`Введите сылку на сайт:`)

getBanner()
