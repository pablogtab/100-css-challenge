const NUMBER_OF_STARS = 500;
const NUMBER_OF_SHOOTING_STARS = 6;

let background = document.getElementById('background')


for (let i = 0; i < NUMBER_OF_STARS; i++) {
    background.appendChild(createRandomStar())
}

for (let i = 0; i < NUMBER_OF_SHOOTING_STARS; i++) {
    background.appendChild(createRandomShootingStar())
}


function createRandomStar() {
    let div = document.createElement('div')
    let top = Math.floor(Math.random() * 401);
    let left = Math.floor(Math.random() * 401);
    let time = Math.floor(Math.random() * 4);
    div.className = 'star'
    div.style = `--offset-top: ${top}px;--offset-left:${left}px;--flicker-time: ${time}s`
    return div
}

function createRandomShootingStar() {
    let div = document.createElement('div')
    let top = Math.floor(Math.random() * (350 - 50 + 1)) + 50;
    let time = (Math.random() * 16) + 2;
    div.className = 'shooting-star'
    div.style = `--offset-top: ${top}px;--shooting-delay: ${time}s`
    return div
}
