let file = null
let interval;

const dragOverHandler = (event) => {
    console.log('aca')
    event.preventDefault();
    let fileUpload = document.getElementById('file-upload-label')
    fileUpload.style = 'background-color:#DDD'
}

const dragLeave = () => {
    clearInterval(interval)
    interval = setInterval(() => {
        clearInterval(interval)
        let fileUpload = document.getElementById('file-upload-label')
        fileUpload.style = 'background-color:transparent'
    }, 50)
}

const dropHandler = (event) => {
    event.preventDefault();
    let fileUpload = document.getElementById('file-upload-label')
    fileUpload.style = 'background-color:transparent'
    let icon = document.getElementById('transform-icon')
    icon.style = "display:none"
    let fileName = document.getElementById('file-name')
    fileName.style = "display:block"
    fileName.innerHTML = event.dataTransfer.files[0].name
    file = event.dataTransfer.files[0]
}


const fileChange = (event) => {
    let fileUpload = document.getElementById('file-upload-label')
    fileUpload.style = 'background-color:transparent'
    let icon = document.getElementById('transform-icon')
    icon.style = "display:none"
    let fileName = document.getElementById('file-name')
    fileName.style = "display:block"
    fileName.innerHTML = event.target.files[0].name
    file = event.target.files[0]
}

const uploadFile = () => {
    if (!file) return
    let fileUpload = document.getElementById('file-upload-label')
    fileUpload.remove()
    file = null;
    let sync = document.getElementById('sync')
    let done = document.getElementById('done')
    let progressBar = document.getElementById('bar')
    let button = document.getElementById('button-upload')
    button.innerHTML = 'Syncing...'
    progressBar.className +=' active'
    sync.className += ' active'
    setTimeout(() => {
        button.innerHTML = 'Done'
        done.className += ' active'
        sync.className = 'sync'
    }, 2500)
}