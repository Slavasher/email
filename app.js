const email = document.querySelector('#email')
const icon1 = document.querySelector('.icon1')
const icon2 = document.querySelector('.icon2')
const valid = document.querySelector('.valid')
const btn = document.querySelector('#btn')

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

function check() {
    if (email.value.match(regExp)) {
        email.style.borderColor = '#03ff38'
        email.style.background = '#dcffdf'
        icon1.style.display = 'none'
        icon2.style.display = 'block'
        valid.style.display = 'none'
        btn.style.display = 'block'
    } else {
        email.style.borderColor = '#fd0202'
        email.style.background = '#fde1e1'
        icon1.style.display = 'block'
        icon2.style.display = 'none'
        valid.style.display = 'block'
        btn.style.display = 'none'

    }
}
function submit(){
    alert('Успешно')
}
