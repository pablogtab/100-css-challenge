const fs = require('fs')

const NUMBER_OF_RINGS = 10
const INITIAL_DOTS = 24
const ADDED_DOTS_BY_RING = 6
const INITIAL_DIAMETER = 60
const DELTA_DIAMETER = 20

let html = ''

for (let i = 1; i <= NUMBER_OF_RINGS; i++) {
    html += `<div class="ring ring-${i}">`

    const DOTS = INITIAL_DOTS + (i - 1) * ADDED_DOTS_BY_RING
    for (let j = 1; j <= DOTS; j++) {

        html += `
        <div class="rotable-dot dot-${j}">
        <div class="dot"></div>
    </div>`}

    html += `
    </div>`
}

let css = ''

for (let i = 1; i <= NUMBER_OF_RINGS; i++) {
    const DOTS = INITIAL_DOTS + (i - 1) * ADDED_DOTS_BY_RING
    const step = 360 / DOTS
    console.log(i, step)
    for (let j = 1; j <= DOTS; j++) {
        css += `
            .ring-${i} .dot-${j} {
                transform: rotate(${Math.floor(j * step * 100) / 100}deg);
              }`
    }

}



fs.writeFileSync('html.html', html)
fs.writeFileSync('css.css', css)
