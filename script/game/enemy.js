class Enemy {
<<<<<<< HEAD
    constructor(player, lifeDown, walls) {
        this.enemyElement = document.querySelector('.enemy');
        this.handleLifeDown = lifeDown;
=======
    constructor(enemy) {
        // this.enemyArray = [];
        // this.enemyElement = document.querySelector('.enemy');
        // this.enemyElement = document.querySelector('.enemy');
        this.enemyElement = document.createElement('div');
        this.enemyElement.classList = 'enemy game-element';
        this.enemyElement.innerHTML = '<svg aria-hidden="true" data-prefix="fas" data-icon="poo" class="svg-inline--fa fa-poo fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="currentColor" d="M451.4 369.1C468.7 356 480 335.4 480 312c0-39.8-32.2-72-72-72h-14.1c13.4-11.7 22.1-28.8 22.1-48 0-35.3-28.7-64-64-64h-5.9c3.6-10.1 5.9-20.7 5.9-32 0-53-43-96-96-96-5.2 0-10.2.7-15.1 1.5C250.3 14.6 256 30.6 256 48c0 44.2-35.8 80-80 80h-16c-35.3 0-64 28.7-64 64 0 19.2 8.7 36.3 22.1 48H104c-39.8 0-72 32.2-72 72 0 23.4 11.3 44 28.6 57.1C26.3 374.6 0 404.1 0 440c0 39.8 32.2 72 72 72h368c39.8 0 72-32.2 72-72 0-35.9-26.3-65.4-60.6-70.9zM192 256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm159.5 139C341 422.9 293 448 256 448s-85-25.1-95.5-53c-2-5.3 2-11 7.8-11h175.4c5.8 0 9.8 5.7 7.8 11zM320 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>';
        document.querySelector('.game-board').appendChild(this.enemyElement);
>>>>>>> develop
        this.x = 0;
        this.y = 0;
        this.walls = walls;
        this.player = player;
        this.renderEnemy(this.x, this.y);
        this.randomMoves();
        setInterval(this.randomMoves.bind(this), 1000);
        // this.renderNewEnemy(); 
    // }
    // renderNewEnemy() {
    //     let player = document.querySelector('.gamer')
    //     player.addEventListener('click', () => {
    //         let cloneEnemy = Object.assign({}, newEnemy);
    //         this.enemyArray.push(cloneEnemy)
    //         console.log(cloneEnemy)
    //         console.log(this.enemyArray)
    //         let gameBoard = document.querySelector('.game-board')
    //         gameBoard.innerHtml = cloneEnemy;
    //     });
}
moveRight() {
    if (this.x < 19) {
        this.x++;
        this.enemyElement.style.left = this.x * 5 + '%';
    }
<<<<<<< HEAD
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
=======
}
moveLeft() {
    if (this.x > 0) {
        this.x--;
        this.enemyElement.style.left = this.x * 5 + '%';
    }
}
moveUp() {
    if (this.y > 0) {
        this.y--;
        this.enemyElement.style.top = this.y * 5 + '%';
    }
}
moveDown() {
    if (this.y < 19) {
        this.y++;
        this.enemyElement.style.top = this.y * 5 + '%';
    }
}
moveSlantRightUp() {
    if (this.y > 0 && this.x < 19) {
        this.y--;
        this.x++;
        this.enemyElement.style.top = this.y * 5 + '%';
        this.enemyElement.style.left = this.x * 5 + '%';
    }
}
moveSlantRightDown() {
    if (this.y < 19 && this.x < 19) {
        this.y++;
        this.x++;
        this.enemyElement.style.top = this.y * 5 + '%';
        this.enemyElement.style.left = this.x * 5 + '%';
    }
}
moveSlantLeftUp() {
    if (this.y > 0 && this.x > 0) {
        this.y--;
        this.x--;
        this.enemyElement.style.top = this.y * 5 + '%';
        this.enemyElement.style.left = this.x * 5 + '%';
    }
}
moveSlantLeftDown() {
    if (this.y < 19 && this.x > 0) {
        this.y++;
        this.x--;
        this.enemyElement.style.top = this.y * 5 + '%';
        this.enemyElement.style.left = this.x * 5 + '%';
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

 function renderNewEnemy() {
    const nEnemy = new Enemy()
    return nEnemy
}


let player = document.querySelector('.gamer')
    player.addEventListener('click', () => {
        renderNewEnemy();
    })






>>>>>>> develop



