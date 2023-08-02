const imageAnimation = (imgNumber) => {
    for (let i = 1; i <= 9; i++) {
        if (i === imgNumber) {
            console.log('aca')
            document.getElementById('img-' + i).classList.toggle('active')
        } else {
            document.getElementById('img-' + i).classList.toggle('hide')
        }
    }
}