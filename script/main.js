var emailForm = document.getElementById('emailForm')


function myCheck() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("remind");
    if (checkBox.checked == true) {
        text.style.display = "none";
        return console.log('checkbox succeed')
    } else {
        text.style.display = "block";
        return console.log('checkbox failed')
    }
}
emailForm.addEventListener('submit', myCheck)

function handleForm(event) {
    event.preventDefault()

    var getEmail = document.getElementById('getEmail');
    var emailValue = getEmail.value;
    var testAt = emailValue.indexOf('@');
    var testDot = emailValue.indexOf('.');

    if (testAt > 0 && testDot > 0) {
        location.replace("./game-board.html")
        return console.log('redirect succeed')
    }
    return console.log('redirect failed')
}
emailForm.addEventListener('submit', handleForm)

