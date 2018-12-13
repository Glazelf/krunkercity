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
    writeTextToCanvas(text, fontSize, xCoordinate, yCoordinate, color = "black", alignment = "center") {
        this._ctx.font = `${fontSize}px Minecraft`;
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
        this._gameController = new GameController(this._canvas);
        this._gameController.clickEventHandler();
        this._gameController.levelClickDetection();
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
    constructor(canvas) {
        this._startScreen = new Startscreen(this._canvasElement);
        this._canvas = canvas;
    }
    clickEventHandler() {
        document.addEventListener('click', (event) => {
            this.onClick(event);
        });
    }
    ;
    onClick(event) {
        if (event.x > this._canvas.getWidth() / 40 && event.x < this._canvas.getWidth() + this._startScreen._level1background.width / 2) {
            if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 - this._startScreen._level1background.height / 2) {
                console.log(event.x);
                console.log(event.y);
                console.log('Level 1 clicked');
            }
        }
        if (event.x > this._canvas.getWidth() / 2.9 && event.x < this._startScreen._level1background.width / 2) {
            if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 - this._startScreen._level1background.height / 2) {
                console.log(event.x);
                console.log(event.y);
                console.log('Level 2 clicked');
            }
        }
        if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._startScreen._level1background.width / 2) {
            if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 - this._startScreen._level1background.height / 2) {
                console.log(event.x);
                console.log(event.y);
                console.log('Level 3 clicked');
            }
        }
        console.log(`picture left top: ${this._canvas.getWidth() / 2.9}`);
        console.log(`clicked x: ${event.x}`);
        console.log(`picture right top: ${this._canvas.getWidth() + this._startScreen._level1background.width / 2}`);
        console.log(`picture top border: ${this._canvas.getHeight() / 3.5}`);
        console.log(`clicked y: ${event.y}`);
        console.log(`picture bottom border: ${this._canvas.getHeight()}`);
    }
    ;
    levelClickDetection() {
        console.log('levelClickDetection is oprating normally');
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
        this._backgroundhelp = new Image();
        this._backgroundhelp.src = "./assets/images/greenenergy.jpg";
    }
    drawHelp() {
        this._canvas.writeImageToCanvas(this._backgroundhelp, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
    }
    ;
}
;
class LevelHelper {
    constructor(canvas) {
        this._canvas = canvas;
        this._level1background = new Image();
        this._level1background.src = "./assets/images/level1.png";
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
        this._canvas.writeImageToCanvas(this._level1background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
    }
    ;
}
;
class Level2 extends LevelHelper {
    drawLevel2() {
        this._canvas.writeImageToCanvas(this._level2background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
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
        this.levelsUnlocked = 1;
        this.draw = () => {
            this._canvas.writeImageToCanvas(this._backgroundstart, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
            this._canvas.writeImageToCanvas(this._level1background, this._canvas.getWidth() / 40, this._canvas.getHeight() / 3.5, this._level1background.width / 2, this._level1background.height / 2);
            this._canvas.writeImageToCanvas(this._level2background, this._canvas.getWidth() / 2.9, this._canvas.getHeight() / 3.5, this._level2background.width / 2, this._level2background.height / 2);
            this._canvas.writeImageToCanvas(this._level3background, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 3.5, this._level2background.width / 2, this._level2background.height / 2);
        };
        this._canvas = canvas;
        this._backgroundstart = new Image();
        this._backgroundstart.src = "./assets/images/greenenergy.jpg";
        this._level1background = new Image();
        this._level1background.src = "./assets/images/level1bubble.png";
        this._level2background = new Image();
        this._level2background.src = "./assets/images/level2bubble.png";
        this._level3background = new Image();
        this._level3background.src = "./assets/images/level3bubble.png";
        console.log(canvas);
    }
}
;
//# sourceMappingURL=app.js.map