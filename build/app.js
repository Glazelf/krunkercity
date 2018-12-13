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
class ClickHelper {
    ClickEventHandler() {
    }
    ;
}
;
class Game {
    constructor() {
        this.drawHelp = () => {
            this._Helpscreen.drawHelp();
        };
        this._canvasElement = document.getElementById('canvas');
        this._canvas = new Canvas(this._canvasElement);
        this._startscreen = new Startscreen(this._canvas);
        this._Helpscreen = new Helpscreen(this._canvas);
    }
    ;
}
;
window.addEventListener('load', init);
function init() {
    const KrunkerCity = new Game();
    window.setInterval(KrunkerCity.drawHelp, 1000 / 60);
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
    constructor(canvas) {
        this._canvas = canvas;
        this._backgroundhelp = new Image();
        this._backgroundhelp.src = "./assets/images/greenenergy.jpg";
        this._munten = new Image();
        this._munten.src = "./assets/images/munten_uitleg.png";
        this._energiePunten = new Image();
        this._energiePunten.src = "./assets/images/energie_uitleg.png";
        this._groeneEnergie = new Image();
        this._groeneEnergie.src = "./assets/images/groen_uitleg.png";
        this._co2 = new Image();
        this._co2.src = "./assets/images/co2_uitleg.png";
        this._windMolen = new Image();
        this._windMolen.src = "./assets/images/windmolen_uitleg.png";
        this._zonnePanelen = new Image();
        this._zonnePanelen.src = "./assets/images/zonnepaneel_uitleg.png";
        this._stuwDam = new Image();
        this._stuwDam.src = "./assets/images/stuwdam_uitleg.png";
        this._aardWarmte = new Image();
        this._aardWarmte.src = "./assets/images/aardwarmte_uitleg.png";
        this._kernCentrale = new Image();
        this._kernCentrale.src = "./assets/images/kerncentrale_uitleg.png";
        this._kolenCentrale = new Image();
        this._kolenCentrale.src = "./assets/images/kolencentrale_uitleg.png";
        this._menuKnop = new Image();
        this._menuKnop.src = "./assets/images/menu_knop.png";
    }
    drawHelp() {
        this._canvas.writeImageToCanvas(this._backgroundhelp, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
        this._canvas.writeImageToCanvas(this._munten, this._canvas.getWidth() / 32, this._canvas.getHeight() / 64, this._munten.width / 3.2, this._munten.height / 3.2);
        this._canvas.writeImageToCanvas(this._energiePunten, this._canvas.getWidth() / 2.87, this._canvas.getHeight() / 64, this._energiePunten.width / 3.2, this._energiePunten.height / 3.2);
        this._canvas.writeImageToCanvas(this._groeneEnergie, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 64, this._groeneEnergie.width / 3.2, this._groeneEnergie.height / 3.2);
        this._canvas.writeImageToCanvas(this._co2, this._canvas.getWidth() / 32, this._canvas.getHeight() / 4, this._co2.width / 3.2, this._co2.height / 3.2);
        this._canvas.writeImageToCanvas(this._windMolen, this._canvas.getWidth() / 2.87, this._canvas.getHeight() / 4, this._windMolen.width / 3.2, this._windMolen.height / 3.2);
        this._canvas.writeImageToCanvas(this._zonnePanelen, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 4, this._zonnePanelen.width / 3.2, this._zonnePanelen.height / 3.2);
        this._canvas.writeImageToCanvas(this._stuwDam, this._canvas.getWidth() / 32, this._canvas.getHeight() / 2.07, this._stuwDam.width / 3.2, this._stuwDam.height / 3.2);
        this._canvas.writeImageToCanvas(this._aardWarmte, this._canvas.getWidth() / 2.87, this._canvas.getHeight() / 2.07, this._aardWarmte.width / 3.2, this._aardWarmte.height / 3.2);
        this._canvas.writeImageToCanvas(this._kernCentrale, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 2.07, this._kernCentrale.width / 3.2, this._kernCentrale.height / 3.2);
        this._canvas.writeImageToCanvas(this._kolenCentrale, this._canvas.getWidth() / 2.87, this._canvas.getHeight() / 1.4, this._kolenCentrale.width / 3.2, this._kolenCentrale.height / 3.2);
        this._canvas.writeImageToCanvas(this._menuKnop, this._canvas.getWidth() / 7.5, this._canvas.getHeight() / 1.3, this._menuKnop.width / 3.2, this._menuKnop.height / 3.2);
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
            this._canvas.writeImageToCanvas(this._level2background, this._canvas.getWidth() / 15, this._canvas.getHeight() / 3, this._level2background.width / 4, this._level2background.height / 4);
            this._canvas.writeImageToCanvas(this._level2background, this._canvas.getWidth() / 15 * 5, this._canvas.getHeight() / 3, this._level2background.width / 4, this._level2background.height / 4);
            this._canvas.writeImageToCanvas(this._level3background, this._canvas.getWidth() / 15 * 9, this._canvas.getHeight() / 3, this._level2background.width / 4, this._level2background.height / 4);
        };
        this._canvas = canvas;
        this._backgroundstart = new Image();
        this._backgroundstart.src = "./assets/images/greenenergy.jpg";
        this._level1background = new Image();
        this._level1background.src = "";
        this._level2background = new Image();
        this._level2background.src = "./assets/images/level2.png";
        this._level3background = new Image();
        this._level3background.src = "./assets/images/level3.png";
        console.log(canvas);
    }
}
;
//# sourceMappingURL=app.js.map