function start() {

    let d = document.getElementById("bars")

    d.addEventListener("click", function () {
        let nav = document.getElementById("bars");
        for (let i = 0; i < nav.children.length; i++) {
            nav.children[i].classList.toggle("active");
        }
        nav.classList.toggle("active");
    })
}


start();