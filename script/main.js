var emailForm = document.getElementById('emailForm')

emailForm.addEventListener('submit', myCheck)
// var emailReminderLabel = document.createElement('label')
// var emailReminderNode = document.querySelector('.email-input')
// emailReminderNode.appendChild(emailReminderLabel)

function myCheck() {
}

function handleForm(event) {
    event.preventDefault()

    var checkBox = document.getElementById("myCheck");
    // var myRemind = document.getElementById("checkboxRemind");
    var checkboxReminderNode = document.querySelector('#checkboxRemind')

    if (checkBox.checked == true) {
        // myRemind.style.display = "none";
        checkboxReminderNode.innerText = ''

        var getEmail = document.getElementById('getEmail');
        var emailValue = getEmail.value;

        var regExpr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regExpr.test(String(emailValue).toLowerCase())) {
            location.replace("./game-menu.html")
        }
        // emailReminderLabel.innerText = 'Proszą wpisać adres o konstrukcji name@email.com'
        // emailReminderLabel.style.display = 'block'

        var emailReminderNode = document.querySelector('#emailRemind')
        emailReminderNode.innerText = 'Proszą wpisać adres o konstrukcji name@email.com'

    } else {
        // myRemind.style.display = "block";
        checkboxReminderNode.innerText = 'Aby przejść dalej, zaakceptuj regulamin'
        console.log('checkbox failed')
    }
}
emailForm.addEventListener('submit', handleForm)

