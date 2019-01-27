class Player {
    constructor(scoreUp, food, walls, lifeDown, poop) {
        this.handleScoreUp = scoreUp;
        this.handleLifeDown = lifeDown;
        this.playerElement = document.createElement('div');
        this.playerElement.classList = 'gamer game-element';
        this.playerElement.innerHTML = `<svg aria-hidden="true" data-prefix="fas" data-icon="grin-beam" class="svg-inline--fa fa-grin-beam fa-w-16"
        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
        <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 144c23.8 0 52.7 29.3 56 71.4.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.1 7.3-15.6 4-14.9-4.5 3.1-42.1 32-71.4 55.8-71.4zm-160 0c23.8 0 52.7 29.3 56 71.4.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.2 7.4-15.6 4-14.9-4.5 3.1-42.1 32-71.4 55.8-71.4zm80 280c-60.6 0-134.5-38.3-143.8-93.3-2-11.9 9.4-21.6 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.4-3.7 22.6 6.1 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3z"></path>
    </svg>`
        document.querySelector('.game-board').appendChild(this.playerElement);
        this.x = 0;
        this.y = 0;
        this.registerEvents();
        this.renderPlayer(this.x, this.y);
        this.walls = walls;
        this.food = food;
        this.enemy = poop;
    }

    wallsCheck(newPosition) {
        let notCollision = true;
        this.walls.walls.forEach(e => {
            if (newPosition.x === e.x && newPosition.y === e.y) {
                notCollision = false;
            }
        });
        return notCollision;
    }

    enemyCheck() {
        if (this.x === game.enemy.x && this.y === game.enemy.y) {
            this.handleLifeDown();
        }
    }

    foodCheck() {
        if (this.x === this.food.food.x && this.y === this.food.food.y) {
            this.handleScoreUp();
            this.food.generate();
            game.enemy.renderNewEnemy();
        }
    }

    beerCheck() {
        if (this.x === game.point.x && this.y === game.point.y) {
            this.handleLifeDown();
        }
    }

    renderPlayer(x, y) {
        this.playerElement.style.left = x * 5 + '%';
        this.playerElement.style.top = y * 5 + '%';
    }

    moveRight() {
        const newPosition = {
            x: this.x + 1,
            y: this.y
        }
        if (this.x < 19 && this.wallsCheck(newPosition)) {
            this.x++;
            this.renderPlayer(this.x, this.y);
        }
        this.enemyCheck();
        this.foodCheck();
    }
    moveLeft() {
        const newPosition = {
            x: this.x - 1,
            y: this.y
        }
        if (this.x > 0 && this.wallsCheck(newPosition)) {
            this.x--;
            this.renderPlayer(this.x, this.y);
        }
        this.enemyCheck();
        this.foodCheck();
    }
    moveUp() {
        const newPosition = {
            x: this.x,
            y: this.y - 1
        }
        if (this.y > 0 && this.wallsCheck(newPosition)) {
            this.y--;
            this.renderPlayer(this.x, this.y);
        }
        this.enemyCheck();
        this.foodCheck();
    }
    moveDown() {
        const newPosition = {
            x: this.x,
            y: this.y + 1
        }
        if (this.y < 19 && this.wallsCheck(newPosition)) {
            this.y++;
            this.renderPlayer(this.x, this.y);
        }
        this.enemyCheck();
        this.foodCheck();
    }
    registerEvents() {
        window.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowUp':
                    this.moveUp();
                    break;
                case 'ArrowDown':
                    this.moveDown();
                    break;
                case 'ArrowRight':
                    this.moveRight();
                    break;
                case 'ArrowLeft':
                    this.moveLeft();
                    break;
                default:
                    return;
            }
        });
    }
}
