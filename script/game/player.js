class Player {
    constructor(walls, enemies) {
        this.playerElement = document.querySelector('.gamer');
        this.x = 0;
        this.y = 0;
        this.registerEvents();
        this.renderPlayer(this.x, this.y);
        this.walls = walls;
    }

    wallsCheck(newPosition) {
        let notCollision = true;
        this.walls.forEach(e => {
            console.log('wall:', e);
            if(newPosition.x === e.x && newPosition.y === e.y) {
                notCollision = false;
            }
        });
        return notCollision;
    }

    enemyCheck() {
        return true;
    }

    renderPlayer(x, y) {
        this.playerElement.style.left = x * 5 + '%';
        this.playerElement.style.top = y * 5 + '%';
    }

    moveRight() {
        const newPosition = {
            x: this.x+1,
            y: this.y
        }

        if (this.x < 19 && this.wallsCheck(newPosition) && this.enemyCheck()) {
            this.x++;
            this.renderPlayer(this.x, this.y);
            console.log('move right')
        }
    }
    moveLeft() {
        const newPosition = {
            x: this.x-1,
            y: this.y
        }
        if (this.x > 0 && this.wallsCheck(newPosition) && this.enemyCheck()) {
            this.x--;
            this.renderPlayer(this.x, this.y);
            console.log('move left');
        }
    }
    moveUp() {
        const newPosition = {
            x: this.x,
            y: this.y-1
        }
        if (this.y > 0 && this.wallsCheck(newPosition) && this.enemyCheck()) {
            this.y--;
            this.renderPlayer(this.x, this.y);
            console.log('move up');
        }
    }
    moveDown() {
        const newPosition = {
            x: this.x,
            y: this.y+1
        }
        if (this.y < 19 && this.wallsCheck(newPosition) && this.enemyCheck()) {
            this.y++;
            this.renderPlayer(this.x, this.y);
            console.log('move down');
        }
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