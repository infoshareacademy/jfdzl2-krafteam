class Enemy {
    constructor(walls, player, lifeDown) {
        this.walls = walls;
        this.player = player;
        this.handleLifeDown = lifeDown;
        this.enemies = [];
        this.enemyElement = document.createElement('div');
        this.enemyElement.classList = 'enemy game-element';
        this.enemyElement.innerHTML = '<svg aria-hidden="true" data-prefix="fas" data-icon="poo" class="svg-inline--fa fa-poo fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="currentColor" d="M451.4 369.1C468.7 356 480 335.4 480 312c0-39.8-32.2-72-72-72h-14.1c13.4-11.7 22.1-28.8 22.1-48 0-35.3-28.7-64-64-64h-5.9c3.6-10.1 5.9-20.7 5.9-32 0-53-43-96-96-96-5.2 0-10.2.7-15.1 1.5C250.3 14.6 256 30.6 256 48c0 44.2-35.8 80-80 80h-16c-35.3 0-64 28.7-64 64 0 19.2 8.7 36.3 22.1 48H104c-39.8 0-72 32.2-72 72 0 23.4 11.3 44 28.6 57.1C26.3 374.6 0 404.1 0 440c0 39.8 32.2 72 72 72h368c39.8 0 72-32.2 72-72 0-35.9-26.3-65.4-60.6-70.9zM192 256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm159.5 139C341 422.9 293 448 256 448s-85-25.1-95.5-53c-2-5.3 2-11 7.8-11h175.4c5.8 0 9.8 5.7 7.8 11zM320 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>';
        document.querySelector('.game-board').appendChild(this.enemyElement);
        this.x = Math.floor(
            Math.random() * 20);
        this.y = Math.floor(
            Math.random() * 20);
        this.randomMoves();
        setInterval(this.randomMoves.bind(this), 1000);
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

    playerCheck() {
        if (this.x === this.player.x && this.y === this.player.y) {
            this.handleLifeDown();
        }
    }
    moveRight() {
        const newPosition = {
            x: this.x + 1,
            y: this.y
        }
        if (this.x < 19 && this.wallsCheck(newPosition)) {
            this.x++;
            this.enemyElement.style.left = this.x * 5 + '%';
        }
        this.playerCheck();
    }
    moveLeft() {
        const newPosition = {
            x: this.x - 1,
            y: this.y
        }
        if (this.x > 0 && this.wallsCheck(newPosition)) {
            this.x--;
            this.enemyElement.style.left = this.x * 5 + '%';
        }
        this.playerCheck();
    }
    moveUp() {
        const newPosition = {
            x: this.x,
            y: this.y - 1
        }
        if (this.y > 0 && this.wallsCheck(newPosition)) {
            this.y--;
            this.enemyElement.style.top = this.y * 5 + '%';
        }
        this.playerCheck();
    }
    moveDown() {
        const newPosition = {
            x: this.x,
            y: this.y + 1
        }
        if (this.y < 19 && this.wallsCheck(newPosition)) {
            this.y++;
            this.enemyElement.style.top = this.y * 5 + '%';
        }
        this.playerCheck();
    }
    moveSlantRightUp() {
        const newPosition = {
            x: this.x + 1,
            y: this.y - 1
        }
        if (this.y > 0 && this.x < 19 && this.wallsCheck(newPosition)) {
            this.y--;
            this.x++;
            this.enemyElement.style.top = this.y * 5 + '%';
            this.enemyElement.style.left = this.x * 5 + '%';
        }
        this.playerCheck();
    }
    moveSlantRightDown() {
        const newPosition = {
            x: this.x + 1,
            y: this.y + 1
        }
        if (this.y < 19 && this.x < 19 && this.wallsCheck(newPosition)) {
            this.y++;
            this.x++;
            this.enemyElement.style.top = this.y * 5 + '%';
            this.enemyElement.style.left = this.x * 5 + '%';
        }
        this.playerCheck();
    }
    moveSlantLeftUp() {
        const newPosition = {
            x: this.x - 1,
            y: this.y - 1
        }
        if (this.y > 0 && this.x > 0 && this.wallsCheck(newPosition)) {
            this.y--;
            this.x--;
            this.enemyElement.style.top = this.y * 5 + '%';
            this.enemyElement.style.left = this.x * 5 + '%';
        }
        this.playerCheck();
    }
    moveSlantLeftDown() {
        const newPosition = {
            x: this.x - 1,
            y: this.y + 1
        }
        if (this.y < 19 && this.x > 0 && this.wallsCheck(newPosition)) {
            this.y++;
            this.x--;
            this.enemyElement.style.top = this.y * 5 + '%';
            this.enemyElement.style.left = this.x * 5 + '%';
        }
        this.playerCheck();
    }
    randomMoves() {
        let moves = Math.floor(Math.random() * 8);
        switch (moves) {
            case 0:
                this.moveUp();
                break;
            case 1:
                this.moveDown();
                break;
            case 2:
                this.moveRight();
                break;
            case 3:
                this.moveLeft();
                break;
            case 4:
                this.moveSlantRightUp();
                break;
            case 5:
                this.moveSlantRightDown();
                break;
            case 6:
                this.moveSlantLeftUp();
                break;
            case 7:
                this.moveSlantLeftDown();
                break;
            default:
                return;

        };
    }

    renderNewEnemy() {
        const nEnemy = new Enemy(this.walls, this.player, this.handleLifeDown);
        this.enemies.push(nEnemy);
        return nEnemy
    }

}