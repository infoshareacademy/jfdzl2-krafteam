class Walls {
    constructor(){
        //this.wallElement = document.querySelector('.wall')
        this.wallElements = []
    }

    generate() {
        for (let i = 0; i < 40; i++) {
            //tworzy obiekt (parametry x, y, w ktorych jest funkcja math.random)
            this.wallElements[i] = {
                x: Math.round(Math.random() * 19),
                y: Math.round(Math.random() * 19),
            }
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
        this.wallElement = document.querySelector('.game-board')

        for (let i = 0; i < 40; i++) {
            let wall = document.createElement()
        }
    }


}

const walls = new Walls();
walls.generate()
