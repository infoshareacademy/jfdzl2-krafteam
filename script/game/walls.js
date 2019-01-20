class Walls {
    constructor(){
        //this.wallElement = document.querySelector('.wall')
        this.elements = []
    }

    generate() {
        for (let i = 0; i < 40; i++) {
            //tworzy obiekt (parametry x, y, w ktorych jest funkcja math.random)
            this.elements[i] = {
                x: Math.round(Math.random() * 19),
                y: Math.round(Math.random() * 19),
            }
            //console.log(this.elements[i])
        }
        console.log(this.elements)
    }

    renderWalls() {
        //petla
    }


}

const walls = new Walls
walls.generate()
