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
    writeImageToCanvas(element, xCoordinate, yCoordinate, width, height) {
        this._ctx.drawImage(element, xCoordinate, yCoordinate, width, height);
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
class Game {
    constructor() {
        this.drawStart = () => {
            this._startscreen.draw();
        };
        this._canvasElement = document.getElementById('canvas');
        this._canvas = new Canvas(this._canvasElement);
        this._startscreen = new Startscreen(this._canvas);
        this._Helpscreen = new Helpscreen(this._canvas);
        this._gameController = new GameController;
        this._gameController.clickEventHandler();
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
class GameController {
    constructor() {
        this._startScreen = new Startscreen(this._canvasElement);
    }
    clickEventHandler() {
        document.addEventListener('click', (event) => {
            this.onClick(event);
        });
    }
    ;
    onClick(event) {
        let hasClicked = event;
        this.clickedX = event.x;
        this.clickedY = event.y;
        console.log(hasClicked);
    }
    ;
    levelSelect() {
        if (this.clickedX > this._startScreen.xPosLevel1Background && this.clickedX < this._startScreen._level1background.width) {
        }
    }
}
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
    constructor(canvas) {
        this._canvas = canvas;
    }
    drawHelp() {
    }
    ;
}
;
class LevelHelper {
    constructor(canvas) {
        this._canvas = canvas;
        this._level1background = new Image();
        this._level1background.src = "";
        this._level2background = new Image();
        this._level2background.src = "./assets/images/level2.png";
        this._level3background = new Image();
        this._level3background.src = "./assets/images/level3.png";
        console.log(canvas);
    }
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
        this._canvas.writeImageToCanvas(this._level3background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
    }
    ;
}
;
class Startscreen {
    constructor(canvas) {
        this.draw = () => {
            this._canvas.writeImageToCanvas(this._backgroundstart, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
            this._canvas.writeImageToCanvas(this._level1background, this._canvas.getWidth() / 15, this._canvas.getHeight() / 3, this._level1background.width / 4, this._level1background.height / 4);
            this._canvas.writeImageToCanvas(this._level2background, this._canvas.getWidth() / 15 * 5, this._canvas.getHeight() / 3, this._level2background.width / 4, this._level2background.height / 4);
            this._canvas.writeImageToCanvas(this._level3background, this._canvas.getWidth() / 15 * 9, this._canvas.getHeight() / 3, this._level2background.width / 4, this._level2background.height / 4);
        };
        this._canvas = canvas;
        this._backgroundstart = new Image();
        this._backgroundstart.src = "./assets/images/greenenergy.jpg";
        this._level1background = new Image();
        this._level1background.src = "";
        this.xPosLevel1Background = this._canvas.getWidth() / 40;
        this.yPosLevel1Background = this._canvas.getHeight() / 4;
        this._level2background = new Image();
        this._level2background.src = "./assets/images/level2.png";
        this.xPosLevel2Background = this._canvas.getWidth() / 40 * 5;
        this.yPosLevel2Background = this._canvas.getHeight() / 4;
        this._level3background = new Image();
        this._level3background.src = "./assets/images/level3.png";
        this.xPosLevel3Background = this._canvas.getWidth() / 40 * 9;
        this.yPosLevel3Background = this._canvas.getHeight() / 4;
    }
}
;
//# sourceMappingURL=app.js.map