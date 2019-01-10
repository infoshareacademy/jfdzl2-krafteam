var emailForm = document.getElementById('emailForm')
var getEmail = document.getElementById('getEmail');

function handleForm(event) {
    event.preventDefault()

    var emailValue = getEmail.value;
    var testAt = emailValue.indexOf('@');
    var testDot = emailValue.indexOf('.');

    if (testAt > 0 && testDot > 0) {
        location.replace("./game-board.html")
        return console.log('succeed')
    }
    return console.log('failed')
}

emailForm.addEventListener('submit', handleForm)


