class Game{
    constructor (){
        this.points = 0;
        this.lifes = 3;
    }
    start(){
        console.log('game started');
    }
    pause(){
        console.log('game paused');
    }
}

const game = new Game();