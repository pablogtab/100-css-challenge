let count = 0;

const add = () => {
    let d = document.getElementById('count')
    d.classList = "count"
    setTimeout(() => {
        d.classList = "count adding"
    }, 5)
    setTimeout(() => {
        count++;
        d.innerHTML = count;
    }, 150)
}



const substract = () => {
    let d = document.getElementById('count')
    d.classList = "count"
    setTimeout(() => {
        d.classList = "count substracting"
    }, 5)
    setTimeout(() => {
        count--;
        d.innerHTML = count;
    }, 150)
}