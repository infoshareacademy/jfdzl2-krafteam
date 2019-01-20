class Player {
    constructor(walls) {
        this.playerElement = document.querySelector('.gamer');
        this.x = 0;
        this.y = 0;
        this.registerEvents();
    }
    moveRight() {
        if (this.x < 19) {
            this.x++;
            this.playerElement.style.left = this.x * 5 + '%';
            console.log('move right')
        }
    }
    moveLeft() {
        if (this.x > 0) {
            this.x--;
            this.playerElement.style.left = this.x * 5 + '%';
            console.log('move left');
        }
    }
    moveUp() {
        if (this.y > 0) {
            this.y--;
            this.playerElement.style.top = this.y * 5 + '%';
            console.log('move up');
        }
    }
    moveDown() {
        if (this.y < 19) {
            this.y++;
            this.playerElement.style.top = this.y * 5 + '%';
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


const newPlayer = new Player();