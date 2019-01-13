var emailForm = document.getElementById('emailForm')

    var emailReminderLabel = document.createElement('label')
    var emailReminderText = document.createTextNode('Proszą wpisać adres o konstrukcji name@email.com (label via js)');
    var emailReminderNode = document.querySelector('.email-input')
    emailReminderNode.appendChild(emailReminderLabel)
    emailReminderLabel.appendChild(emailReminderText)
    emailReminderLabel.style.display = ('block')

    // var emailReminderNode = document.querySelector('#emailVerif')
    // var emailReminderText = document.createTextNode('Proszą wpisać adres o konstrukcji name@email.com (label via html)');
    // emailReminderNode.appendChild(emailReminderText)


function myCheck() {
}
emailForm.addEventListener('submit', myCheck)

function handleForm(event) {
    event.preventDefault()



    var checkBox = document.getElementById("checkboxVerif");
    var myRemind = document.getElementById("remind");

    if (checkBox.checked == true) {
        myRemind.style.display = "none";
        console.log('checkbox succeed')
        var getEmail = document.getElementById('getEmail');
        var emailValue = getEmail.value;
        // var testAt = emailValue.indexOf('@');
        // var testDot = emailValue.indexOf('.');

        // if (testAt > 0 && testDot > 0) {

        var regExpr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regExpr.test(String(emailValue).toLowerCase())) {
            location.replace("./game-menu.html")
            console.log('redirect succeed')
        }
        console.log('redirect failed')
    } else {
        myRemind.style.display = "block";
        console.log('checkbox failed')
    }
}
emailForm.addEventListener('submit', handleForm)

