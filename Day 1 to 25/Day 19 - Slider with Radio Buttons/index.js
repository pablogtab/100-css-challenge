const position = (position) => {
    let background = document.getElementById('background')
    let circle = document.getElementById('moving-circle')

    background.className = 'background position-' + position
    circle.className = 'circle moving-circle position-' + position

}