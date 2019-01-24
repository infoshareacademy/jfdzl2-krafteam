class Game {
    constructor() {
        this.points = 0;
        this.lives = 3;
        this.walls = [
            { x: 1, y: 1 },
            { x: 6, y: 7 },
            { x: 0, y: 3 },
            { x: 13, y: 2 },
            { x: 4, y: 0 },
            { x: 18, y: 15 },
            { x: 2, y: 19 },
            { x: 16, y: 3 },
            { x: 4, y: 3 },
            { x: 2, y: 9 },
        ]
        this.player = new Player(this.walls, this.lifeDown.bind(this));
        this.enemy = new Enemy();
    }
    lifeDown() {
        console.log('life down')
        this.lives--;
        if (this.lives === 0) {
            this.end()
        }
    }
    scoreUp() {
        console.log('score up')
    }
    start() {
        console.log('game started');
    }
    pause() {
        console.log('game paused');
    }
    reset() {
        console.log('game reset')
    }
    end() {
        console.warn('game over')
    }
}

const game = new Game();
