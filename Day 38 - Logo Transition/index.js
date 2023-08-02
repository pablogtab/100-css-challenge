const toggleClasses = () => {

    let white = document.getElementById('white')
    let purple = document.getElementById('purple')
    if (!white.className.includes('active')) {
        white.classList.toggle('active')
        purple.classList.toggle('active')
    } else {
        white.classList.toggle('active')
        purple.classList.toggle('active')
        white.classList.toggle('inactive')
        purple.classList.toggle('inactive')
    }

}