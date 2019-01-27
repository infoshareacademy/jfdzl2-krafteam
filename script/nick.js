var runNickModal = document.getElementById('goToNickModal')
function displayModal() {
    var nickModal = document.getElementById('modal-id');

    nickModal.setAttribute('style', 'display:block');
}
runNickModal.addEventListener('click', displayModal)


var playButton = document.getElementById('btn-id');
function myNick() {
    var getNick = document.getElementById('nick-id')
    var nickValue = getNick.value;

    if (nickValue.length > 0) {
        localStorage.setItem('nick', nickValue)
        location.replace("./game-board.html")
    }
}
playButton.addEventListener('click', myNick)


