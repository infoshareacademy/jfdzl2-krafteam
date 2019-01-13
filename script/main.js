var emailForm = document.getElementById('emailForm')

emailForm.addEventListener('submit', myCheck)
// var emailReminderLabel = document.createElement('label')
// var emailReminderNode = document.querySelector('.email-input')
// emailReminderNode.appendChild(emailReminderLabel)

function myCheck() {
}

function handleForm(event) {
    event.preventDefault()

    var checkBox = document.getElementById("checkboxVerif");
    var myRemind = document.getElementById("remind");

    if (checkBox.checked == true) {
        myRemind.style.display = "none";
        console.log('checkbox succeed')
        var getEmail = document.getElementById('getEmail');
        var emailValue = getEmail.value;

        var regExpr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regExpr.test(String(emailValue).toLowerCase())) {
            location.replace("./game-menu.html")
            console.log('redirect succeed')
        }
        // emailReminderLabel.innerText = 'Proszą wpisać adres o konstrukcji name@email.com'
        // emailReminderLabel.style.display = 'block'

        var emailReminderNode = document.querySelector('#emailVerif')
        emailReminderNode.innerText = 'Proszą wpisać adres o konstrukcji name@email.com'

        console.log('redirect failed')
    } else {
        myRemind.style.display = "block";
        console.log('checkbox failed')
    }
}
emailForm.addEventListener('submit', handleForm)

