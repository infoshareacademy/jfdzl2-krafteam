class Food {
    constructor(walls) {
        this.food = {
            x: '',
            y: '',
        }
        this.gameBoardContainer = document.querySelector('.game-board');
        this.foodDiv = document.createElement('div');
        this.walls = walls;
    }



    renderFood() {
        this.foodDiv.classList = ''
        this.foodDiv.innerHTML = ''
        this.foodDiv.style.top = ''
        this.foodDiv.style.left = ''
        this.gameBoardContainer.appendChild(this.foodDiv);

        this.foodDiv.classList = 'food game-element'
        this.foodDiv.innerHTML = '<svg aria-hidden="true" data-prefix="fas" data-icon="beer" class="svg-inline--fa fa-beer fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"></path></svg>'
        this.foodDiv.style.top = this.food.y * 5 + '%'
        this.foodDiv.style.left = this.food.x * 5 + '%'

        this.gameBoardContainer.appendChild(this.foodDiv);
    }

    generate() {
        this.food.x = Math.round(Math.random() * 19)
        this.food.y = Math.round(Math.random() * 19)
        game.walls.walls.forEach(e => {
            if (e.x === this.food.x && e.y === this.food.y) {
                this.generate();
            }
        });
        this.renderFood();
    }
}