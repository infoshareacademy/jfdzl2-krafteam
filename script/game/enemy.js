class Enemy {
    constructor(enemy) {
        this.enemyElement = document.querySelector('.enemy');
        this.x = 0;
        this.y = 0;
        this.randomMoves();
        setInterval(this.randomMoves.bind(this), 1000);
    }
    moveRight() {
        if (this.x < 19) {
            this.x++;
            this.enemyElement.style.left = this.x * 5 + '%';
            console.log('move right')
        }
    }
    moveLeft() {
        if (this.x > 0) {
            this.x--;
            this.enemyElement.style.left = this.x * 5 + '%';
            console.log('move left');
        }
    }
    moveUp() {
        if (this.y > 0) {
            this.y--;
            this.enemyElement.style.top = this.y * 5 + '%';
            console.log('move up');
        }
    }
    moveDown() {
        if (this.y < 19) {
            this.y++;
            this.enemyElement.style.top = this.y * 5 + '%';
            console.log('move down');
        }
    }
    moveSlantRightUp() {
        if (this.y > 0 && this.x < 19) {
            this.y--;
            this.x++;
            this.enemyElement.style.top = this.y * 5 + '%';
            this.enemyElement.style.left = this.x * 5 + '%';
            console.log('rightUp');
        }
    }
    moveSlantRightDown() {
        if (this.y < 19 && this.x < 19) {
            this.y++;
            this.x++;
            this.enemyElement.style.top = this.y * 5 + '%';
            this.enemyElement.style.left = this.x * 5 + '%';
            console.log('rightDown')
        }
    }
    moveSlantLeftUp() {
        if (this.y > 0 && this.x > 0) {
            this.y--;
            this.x--;
            this.enemyElement.style.top = this.y * 5 + '%';
            this.enemyElement.style.left = this.x * 5 + '%';
            console.log('leftUp')
        }
    }
    moveSlantLeftDown() {
        if (this.y < 19 && this.x > 0) {
            this.y++;
            this.x--;
            this.enemyElement.style.top = this.y * 5 + '%';
            this.enemyElement.style.left = this.x * 5 + '%';
            console.log('leftDown');
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


const newEnemy = new Enemy();
//newEnemy.randomMoves();