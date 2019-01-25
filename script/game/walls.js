class Walls {
    constructor() {
        this.walls = []
        this.numberOfWalls = 80;
        this.gameBoardContainer = document.querySelector('.game-board');
    }

    generate() {
        for (let i = 0; i < this.numberOfWalls; i++) {
            this.walls.push({
                x: Math.round(Math.random() * 19),
                y: Math.round(Math.random() * 19),
            });
        }
        this.renderWalls();
    }

    renderWalls() {
        this.walls.forEach((wall) => {
            let wallDiv = document.createElement('div')

            wallDiv.classList = 'wall game-element'
            wallDiv.style.top = wall.y * 5 + '%'
            wallDiv.style.left = wall.x * 5 + '%'

            this.gameBoardContainer.appendChild(wallDiv);
        })
    }
}

// const walls = new Walls();
// walls.generate()