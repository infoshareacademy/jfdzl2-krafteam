class Player {
    constructor(walls, lifeDown, poop) {
        this.handleLifeDown = lifeDown;
        this.playerElement = document.querySelector('.gamer');
        this.x = 0;
        this.y = 0;
        this.registerEvents();
        this.renderPlayer(this.x, this.y);
        this.walls = walls;
        this.enemy = poop
    }

    wallsCheck(newPosition) {
        let notCollision = true;
        this.walls.forEach(e => {
            if (newPosition.x === e.x && newPosition.y === e.y) {
                notCollision = false;
                // console.log('wall:', e);
            }
        });
        return notCollision;
    }

    enemyCheck() {
        if (this.x === game.enemy.x && this.y === game.enemy.y) {
            this.handleLifeDown();
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
        } this.enemyCheck()
    }
    moveLeft() {
        const newPosition = {
            x: this.x - 1,
            y: this.y
        }
        if (this.x > 0 && this.wallsCheck(newPosition)) {
            this.x--;
            this.renderPlayer(this.x, this.y);
        } this.enemyCheck()
    }
    moveUp() {
        const newPosition = {
            x: this.x,
            y: this.y - 1
        }
        if (this.y > 0 && this.wallsCheck(newPosition)) {
            this.y--;
            this.renderPlayer(this.x, this.y);
        } this.enemyCheck()
    }
    moveDown() {
        const newPosition = {
            x: this.x,
            y: this.y + 1
        }
        if (this.y < 19 && this.wallsCheck(newPosition)) {
            this.y++;
            this.renderPlayer(this.x, this.y);
        } this.enemyCheck()
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