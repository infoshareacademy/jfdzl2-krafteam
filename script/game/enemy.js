class Enemy {
    constructor(player, lifeDown, walls) {
        this.enemyElement = document.querySelector('.enemy');
        this.handleLifeDown = lifeDown;
        this.x = 0;
        this.y = 0;
        this.walls = walls;
        this.player = player;
        this.renderEnemy(this.x, this.y);
        this.randomMoves();
        setInterval(this.randomMoves.bind(this), 1000);
    }
    renderEnemy(x, y) {
        this.enemyElement.style.left = x * 5 + '%';
        this.enemyElement.style.top = y * 5 + '%';
    }
    collisionCheck(newPosition) {
        let notCollision = true;
        this.walls.forEach(e => {
            if(newPosition.x === e.x && newPosition.y === e.y) {
                notCollision = false;
            }
        });
        if(newPosition.x === this.player.x && newPosition.y === this.player.y) {
            notCollision = false;
            this.handleLifeDown();
        }
        return notCollision;
    }
    moveRight() {
        const newPosition = {
            x: this.x+1,
            y: this.y
        }
        if (this.x < 19 && this.collisionCheck(newPosition)) {
            this.x++;
            this.renderEnemy(this.x, this.y);
        }
    }
    moveLeft() {
        const newPosition = {
            x: this.x-1,
            y: this.y
        }
        if (this.x > 0 && this.collisionCheck(newPosition)) {
            this.x--;
            this.renderEnemy(this.x, this.y);
        }
    }
    moveUp() {
        const newPosition = {
            x: this.x,
            y: this.y-1
        }
        if (this.y > 0 && this.collisionCheck(newPosition)) {
            this.y--;
            this.renderEnemy(this.x, this.y);
        }
    }
    moveDown() {
        const newPosition = {
            x: this.x,
            y: this.y+1
        }
        if (this.y < 19 && this.collisionCheck(newPosition)) {
            this.y++;
            this.renderEnemy(this.x, this.y);
        }
    }
    moveSlantRightUp() {
        const newPosition = {
            x: this.x+1,
            y: this.y-1
        }
        if (this.y > 0 && this.x < 19 && this.collisionCheck(newPosition)) {
            this.y--;
            this.x++;
            this.renderEnemy(this.x, this.y);
        }
    }
    moveSlantRightDown() {
        const newPosition = {
            x: this.x+1,
            y: this.y+1
        }
        if (this.y < 19 && this.x < 19 && this.collisionCheck(newPosition)) {
            this.y++;
            this.x++;
            this.renderEnemy(this.x, this.y);
        }
    }
    moveSlantLeftUp() {
        const newPosition = {
            x: this.x-1,
            y: this.y-1
        }
        if (this.y > 0 && this.x > 0 && this.collisionCheck(newPosition)) {
            this.y--;
            this.x--;
            this.renderEnemy(this.x, this.y);
        }
    }
    moveSlantLeftDown() {
        const newPosition = {
            x: this.x-1,
            y: this.y+1
        }
        if (this.y < 19 && this.x > 0 && this.collisionCheck(newPosition)) {
            this.y++;
            this.x--;
            this.renderEnemy(this.x, this.y);
        }
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


}