var emailForm = document.getElementById('emailForm')

emailForm.addEventListener('submit', myCheck)

function myCheck() {
}

function handleForm(event) {
    event.preventDefault()

    var checkBox = document.getElementById("myCheck");
    var checkboxReminderNode = document.querySelector('#checkboxRemind')

    if (checkBox.checked == true) {
        checkboxReminderNode.innerText = ''

        var getEmail = document.getElementById('getEmail');
        var emailValue = getEmail.value;

        var regExpr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regExpr.test(String(emailValue).toLowerCase())) {
            location.replace("./game-menu.html")
            emailReminderNode.innerText = ''    
        }

        var emailReminderNode = document.querySelector('#emailRemind')
        emailReminderNode.innerText = 'Proszę wpisać adres o konstrukcji name@email.com'

    } else {
        checkboxReminderNode.innerText = 'Aby przejść dalej, zaakceptuj regulamin'
        console.log('checkbox failed')
    }
}
emailForm.addEventListener('submit', handleForm)

