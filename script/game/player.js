class Player {
<<<<<<< HEAD
    constructor(walls, lifeDown, enemy) {
=======
    constructor(walls, lifeDown, poop) {
>>>>>>> develop
        this.handleLifeDown = lifeDown;
        this.playerElement = document.querySelector('.gamer');
        this.x = 0;
        this.y = 0;
        this.walls = walls;
        // this.enemies = enemies;
        this.enemy = enemy;
        this.registerEvents();
        this.renderPlayer(this.x, this.y);
<<<<<<< HEAD
=======
        this.walls = walls;
        this.enemy = poop
>>>>>>> develop
    }

    collisionCheck(newPosition) {
        let notCollision = true;
        this.walls.forEach(e => {
<<<<<<< HEAD
            if(newPosition.x === e.x && newPosition.y === e.y) {
=======
            if (newPosition.x === e.x && newPosition.y === e.y) {
>>>>>>> develop
                notCollision = false;
                console.log('wall:', e);
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

<<<<<<< HEAD
=======
    enemyCheck() {
        if (this.x === game.enemy.x && this.y === game.enemy.y) {
            this.handleLifeDown();
        }
    }

>>>>>>> develop
    renderPlayer(x, y) {
        this.playerElement.style.left = x * 5 + '%';
        this.playerElement.style.top = y * 5 + '%';
    }

    moveRight() {
        const newPosition = {
            x: this.x + 1,
            y: this.y
        }
<<<<<<< HEAD

        if (this.x < 19 && this.collisionCheck(newPosition)) {
=======
        if (this.x < 19 && this.wallsCheck(newPosition)) {
>>>>>>> develop
            this.x++;
            this.renderPlayer(this.x, this.y);
        } this.enemyCheck()
    }
    moveLeft() {
        const newPosition = {
            x: this.x - 1,
            y: this.y
        }
<<<<<<< HEAD
        if (this.x > 0 && this.collisionCheck(newPosition)) {
=======
        if (this.x > 0 && this.wallsCheck(newPosition)) {
>>>>>>> develop
            this.x--;
            this.renderPlayer(this.x, this.y);
        } this.enemyCheck()
    }
    moveUp() {
        const newPosition = {
            x: this.x,
            y: this.y - 1
        }
<<<<<<< HEAD
        if (this.y > 0 && this.collisionCheck(newPosition)) {
=======
        if (this.y > 0 && this.wallsCheck(newPosition)) {
>>>>>>> develop
            this.y--;
            this.renderPlayer(this.x, this.y);
        } this.enemyCheck()
    }
    moveDown() {
        const newPosition = {
            x: this.x,
            y: this.y + 1
        }
<<<<<<< HEAD
        if (this.y < 19 && this.collisionCheck(newPosition)) {
=======
        if (this.y < 19 && this.wallsCheck(newPosition)) {
>>>>>>> develop
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