class Player {
    constructor(walls, enemies) {
        this.playerElement = document.querySelector('.gamer');
        this.x = 0;
        this.y = 0;
        this.registerEvents();
        this.renderPlayer(this.x, this.y);
    }

    wallsCheck() {
        return true;
    }

    enemyCheck() {
        return true;
    }

    renderPlayer(x, y) {
        this.playerElement.style.left = x * 5 + '%';
        this.playerElement.style.top = y * 5 + '%';
    }

    moveRight() {
        if (this.x < 19 && this.wallsCheck() && this.enemyCheck()) {
            this.x++;
            this.renderPlayer(this.x, this.y);
            console.log('move right')
        }
    }
    moveLeft() {
        if (this.x > 0 && this.wallsCheck() && this.enemyCheck()) {
            this.x--;
            this.renderPlayer(this.x, this.y);
            console.log('move left');
        }
    }
    moveUp() {
        if (this.y > 0 && this.wallsCheck() && this.enemyCheck()) {
            this.y--;
            this.renderPlayer(this.x, this.y);
            console.log('move up');
        }
    }
    moveDown() {
        if (this.y < 19 && this.wallsCheck() && this.enemyCheck()) {
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