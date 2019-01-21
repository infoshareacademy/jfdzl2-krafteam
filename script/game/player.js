class Player {
    constructor(walls, lifeDown, enemy) {
        this.handleLifeDown = lifeDown;
        this.playerElement = document.querySelector('.gamer');
        this.x = 0;
        this.y = 0;
        this.registerEvents();
        this.renderPlayer(this.x, this.y);
        this.walls = walls;
        // this.enemies = enemies;
        this.enemy = enemy;
    }

    collisionCheck(newPosition) {
        let notCollision = true;
        this.walls.forEach(e => {
            if(newPosition.x === e.x && newPosition.y === e.y) {
                notCollision = false;
            }
        });
        // this.enemies.forEach(e => {
        //     if(newPosition.x === e.x && newPosition.y === e.y) {
        //         notCollision = false;
        //         this.handleLifeDown();
        //     }
        // })
        if(newPosition.x === this.enemy.x && newPosition.y === this.enemy.y) {
            notCollision = false;
            this.handleLifeDown();
        }
        return notCollision;
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

        if (this.x < 19 && this.collisionCheck(newPosition)) {
            this.x++;
            this.renderPlayer(this.x, this.y);
        }
    }
    moveLeft() {
        const newPosition = {
            x: this.x-1,
            y: this.y
        }
        if (this.x > 0 && this.collisionCheck(newPosition)) {
            this.x--;
            this.renderPlayer(this.x, this.y);
        }
    }
    moveUp() {
        const newPosition = {
            x: this.x,
            y: this.y-1
        }
        if (this.y > 0 && this.collisionCheck(newPosition)) {
            this.y--;
            this.renderPlayer(this.x, this.y);
        }
    }
    moveDown() {
        const newPosition = {
            x: this.x,
            y: this.y+1
        }
        if (this.y < 19 && this.collisionCheck(newPosition)) {
            this.y++;
            this.renderPlayer(this.x, this.y);
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