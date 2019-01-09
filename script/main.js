function checkEmailAddress() {
    var getEmail = document.getElementById('getEmail');
    var emailValue = getEmail.value;
    var testAt = emailValue.indexOf('@');
    var testDot = emailValue.indexOf('.')

    if (testAt > 0 && testDot > 0) {
        location.replace("./game-board.html")
    }
}
