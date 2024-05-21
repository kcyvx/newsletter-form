const email = document.querySelector('#email')
const submit = document.querySelector('#submit')
const button = document.querySelector('.btn')
const container = document.querySelector('.container')
const validation = document.querySelector('.validation')
const promptEmail = document.querySelector('.email-prompt')
const erreursMsg = document.querySelector ('.erreur-msg')

function changement() {
    container.classList.toggle('hidden')
    validation.classList.toggle('hidden')
}

function erreurs() {
    for (let i = 0; i < email.value.length; i++) {
        if (email.value[i] == "@") {
            return true

        }


    }
    return false

}

submit.addEventListener('click', () => {
    if (erreurs()) {
        changement()
        promptEmail.textContent = email.value
    }
    else{
        erreursMsg.classList.remove('hidden-txt')
    }
})
email.addEventListener('click', ()=> {
    erreursMsg.classList.add('hidden-txt')

})
button.addEventListener('click', changement)


