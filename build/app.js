class Canvas {
    constructor(canvasID) {
        this._canvasElement = canvasID;
        this._ctx = this._canvasElement.getContext('2d');
        this._canvasElement.width = window.innerWidth;
        this._canvasElement.height = window.innerHeight;
    }
    ;
    clearScreen() {
        this._ctx.clearRect(0, 0, this._canvasElement.width, this._canvasElement.height);
    }
    ;
    writeTextToCanvas(text, fontSize, xCoordinate, yCoordinate, color = "white", alignment = "center") {
        this._ctx.font = `${fontSize}px Comic Sans`;
        this._ctx.fillStyle = color;
        this._ctx.textAlign = alignment;
        this._ctx.fillText(text, xCoordinate, yCoordinate);
    }
    ;
    writeImageToCanvas(src, xCoordinate, yCoordinate, height, width) {
        let element = document.createElement("img");
        element.src = src;
        element.addEventListener("load", () => {
            this._ctx.drawImage(element, xCoordinate, yCoordinate, width, height);
        });
    }
    ;
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    ;
    getWidth() {
        return this._canvasElement.width;
    }
    ;
    getHeight() {
        return this._canvasElement.height;
    }
    ;
}
;
class ClickHelper {
    ClickEventHandler() {
    }
    ;
}
;
class Game {
    constructor() {
        this.drawStart = () => {
            this._startscreen.draw();
        };
        this._canvasElement = document.getElementById('canvas');
        this._canvas = new Canvas(this._canvasElement);
        this._startscreen = new Startscreen(this._canvas);
    }
    ;
}
;
window.addEventListener('load', init);
function init() {
    const KrunkerCity = new Game();
    window.setInterval(KrunkerCity.drawStart, 1000 / 60);
}
;
class GameItem {
    constructor(canvas, imageSource, xCoor, yCoor, width, height) {
        this._canvas = new Canvas(canvas);
        this._imgSource = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._width = width;
        this._height = height;
    }
    draw() {
        this._canvas.writeImageToCanvas(this._imgSource, this._xPos, this._yPos, this._width, this._height);
    }
    getX() {
        return this._xPos;
    }
    getY() {
        return this._yPos;
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
}
class Helpscreen {
    drawHelp() {
    }
    ;
}
;
class LevelHelper {
    drawBuildSpots() {
    }
    ;
}
;
class Level1 extends LevelHelper {
    drawLevel1() {
    }
    ;
}
;
class Level2 extends LevelHelper {
    drawLevel2() {
    }
    ;
}
;
class Level3 extends LevelHelper {
    drawLevel3() {
    }
    ;
}
;
class Startscreen {
    constructor(canvas) {
        this.backgroundImage = [
            "./assets/images/greenenergy.jpg"
        ];
        this._canvas = canvas;
    }
    draw() {
        this._canvas.writeImageToCanvas("./assets/images/greenenergy.jpg", 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
    }
    ;
}
;
//# sourceMappingURL=app.js.map