let mailSended = false;

const sendMail = () => {
    if (mailSended) return
    let circle = document.getElementsByClassName('circle')[0]
    let outerCircle = document.getElementsByClassName('outer-circle')[0]
    let sendMail = document.getElementsByClassName('send-mail')[0]
    let reset = document.getElementsByClassName('reset')[0]
    let letter = document.getElementsByClassName('letter')[0]
    let plane = document.getElementsByClassName('plane')[0]
    plane.className.baseVal += ' active'
    letter.className.baseVal += ' active'
    circle.className += ' active'
    outerCircle.className += ' active'
    sendMail.className += ' active'
    reset.className += ' active'
    mailSended = true;
}

const reset = () => {
    let circle = document.getElementsByClassName('circle')[0]
    let outerCircle = document.getElementsByClassName('outer-circle')[0]
    let sendMail = document.getElementsByClassName('send-mail')[0]
    let reset = document.getElementsByClassName('reset')[0]
    let letter = document.getElementsByClassName('letter')[0]
    let plane = document.getElementsByClassName('plane')[0]
    plane.className.baseVal += 'plane'
    letter.className.baseVal += 'letter'
    circle.className += 'circle'
    outerCircle.className += 'outer-circle'
    sendMail.className += 'send-mail'
    reset.className += 'reset'
    mailSended = false;
}
