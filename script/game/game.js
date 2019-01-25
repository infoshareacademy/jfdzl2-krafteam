class Game {
    constructor() {
        this.points = 0;
        this.lives = 3;
        this.walls = new Walls();
        this.player = new Player(this.walls, this.lifeDown.bind(this));
        this.enemy = new Enemy(this.walls, this.player);
        this.gameOver = false;
    }
    lifeDown() {
        // console.log('life down')
        this.scoreUp()
        this.heartBreak()
        this.lives--;
        if (this.lives === 0) {
            this.end()
        }
    }
    heartBreak() {
        let heart = document.querySelector('.life-icon');
        let broken = `<svg aria-hidden="true" data-prefix="fas" data-icon="heart-broken" class="svg-inline--fa fa-heart-broken fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M473.7 73.8l-2.4-2.5c-46-47-118-51.7-169.6-14.8L336 159.9l-96 64 48 128-144-144 96-64-28.6-86.5C159.7 19.6 87 24 40.7 71.4l-2.4 2.4C-10.4 123.6-12.5 202.9 31 256l212.1 218.6c7.1 7.3 18.6 7.3 25.7 0L481 255.9c43.5-53 41.4-132.3-7.3-182.1z"></path></svg>`
        heart.setAttribute('class', 'life-icon-lost');
        heart.innerHTML = broken;
    }
    scoreUp() {
        let counter = document.querySelector('.counter')
        this.points++;
        if (this.points > 9) {
            if (this.points > 99) {
                counter.innerText = this.points;
            }
            counter.innerText = '0' + this.points;
            return
        }
        counter.innerText = '00' + this.points;
        console.log('score up')
    }
    start() {
        console.log('game started');
        this.player = new Player(this.walls, this.lifeDown.bind(this));
        //const walls = new Walls();
        this.walls.generate();

    }
    pause() {
        console.log('game paused');
    }
    reset() {
        console.log('game reset')
    }
    end() {
        const modal = document.querySelector('.modal');
        modal.style.display = "block";
        clearInterval(setInterval());
        this.gameOver = true
    }
}

const game = new Game();