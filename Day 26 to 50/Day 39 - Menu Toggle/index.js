const menu = () => {

    let menu = document.getElementById('menu')
    let options = document.getElementById('options')

    if (!menu.className.includes('active')) {
        menu.classList.toggle('active')
    } else {
        menu.classList.toggle('inactive')
        menu.classList.toggle('active')
    }

    options.classList.toggle('active')
}