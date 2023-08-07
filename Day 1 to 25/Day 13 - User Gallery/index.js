const click = ()=>{
    let b = document.getElementById("b-img")
    let bflat = document.getElementById("b-flat")
    let circle = document.getElementById("close-circle")
    let profile = document.getElementById("profile-picture")
    b.classList.toggle('background-active')
    bflat.classList.toggle('background-active')
    circle.classList.toggle('close-circle-active')
    profile.classList.toggle('profile-picture-active')
}

document.click = click