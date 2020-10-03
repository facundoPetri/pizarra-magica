function randomrgb () {
    let o = Math.round, r = Math.random, s= 255
    return 'rgba(' + o(r()*s) + ',' +o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')'
}

const container = document.getElementById('container')

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for (i = 0; i < cols * rows; i++) {
        let cell = document.createElement('div')
        container.appendChild(cell).className = 'grid-item'
    }
}

makeRows(20, 20)

const item = document.getElementsByClassName('grid-item')
function print() {
    for (i = 0; i < item.length; i++) {
        item[i].addEventListener('mouseenter', function (e) {
            e['path'][0].style.backgroundColor = randomrgb()
        })
    }
}

print()

document.getElementById('clickMe').onclick = function () {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    let gridSize = null
    while (!gridSize || gridSize == 0 || gridSize > 100) {
        gridSize = prompt('How many rows and cols do you want?')
    }
    makeRows(gridSize, gridSize)
    print()
}
