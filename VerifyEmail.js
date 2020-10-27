
const email = document.getElementById('email')

const isEmail = (email)=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validate = ()=> {
    const input = document.getElementById('email').value
    if(!isEmail(input)) {
        //generate error
    } else {
        // submit email
    }
}

submit.addEventListener('click', e => {
    e.preventDefault()
    validate()
})