function ask (){
    const result = confirm ("Czy chcesz odpowiedzieź na pytanie");
    if (result===true ){
       const name = prompt ('Jak masz na imie?');
       alert('Hello ' + name)
    }
}
ask()



const addressUrl = window.prompt('Podaj URL')

//window.location = addressUrl

window.open(addressUrl)

