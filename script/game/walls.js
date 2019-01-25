class Walls {
    constructor(){
        //this.wallElement = document.querySelector('.wall')
        this.wallElements = []
    }

    generate() {
        for (let i = 0; i < 40; i++) {
            // tworzy obiekt (parametry x, y, w ktorych jest funkcja math.random)
            // this.wallElements[i] = {
            //     x: Math.round(Math.random() * 19),
            //     y: Math.round(Math.random() * 19),
            // }
            this.wallElements.push({
                x: Math.round(Math.random() * 19),
                y: Math.round(Math.random() * 19),
            })

            //console.log(this.elements[i])
        }
        console.log(this.wallElements)
    }

    renderWalls() {
        //petla z createElements, div
        //dodac klase
        //dodac style
        //appendChild

        //this.elements.forEach() {} ?

        for (let i = 0; i < 40; i++) {
            this.wallElements[i] = document.querySelector('.game-board')
            let wall = this.wallElements[i].document.createElement('div')

            wall.classList = 'wall game-element'
            wall.style.top = this.y * 5 +'%'
            wall.style.left = this.x * 5 +'%'

        }
    }


}

const walls = new Walls();
walls.generate()
//walls.renderWalls()