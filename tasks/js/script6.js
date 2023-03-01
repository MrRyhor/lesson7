function getTable(n, m) {
    document.write('<table border=1>')
    for (let i = 0; i < n; i++) {
        document.write('<tr>')
        for (let j = 0; j < m; j++) {
            document.write(`<td>${msg}</td>`)
        }
        document.write('</tr>')
    }
    document.write('</table>')
}

const n = parseInt(prompt('Введите количество строк таблицы N:'))
const m = parseInt(prompt('Введите количество столбцов таблицы M:'))
const msg = prompt('Введите сообщение, которое будет в ячейках таблицы:')

getTable(n, m)
