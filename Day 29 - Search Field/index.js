


const keydown = (event) => {

    let input = document.getElementById('input')
    let result = document.getElementById('result')
    result.innerHTML = ''
    if (input.value) {
        result.append(create1st(input.value))
        result.append(createFakeSecondSearch1(input.value))
        result.append(createFakeSecondSearch2(input.value))
    }

}

const create1st = (innerText) => {
    let p = document.createElement('p')
    p.innerHTML = innerText
    return p
}

const createFakeSecondSearch2 = (innerText) => {
    let p = document.createElement('p')
    p.innerHTML = `ut aliquid ex <b>${innerText}</b> vero eos`
    return p
}

const createFakeSecondSearch1 = (innerText) => {
    let p = document.createElement('p')
    p.innerHTML = `Veritatis et <b>${innerText}</b>`
    return p
}