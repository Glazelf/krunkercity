class Canvas {
    constructor(canvasID) {
        this._canvasElement = canvasID;
        this._ctx = this._canvasElement.getContext('2d');
        this._canvasElement.width = window.innerWidth;
        this._canvasElement.height = window.innerHeight;
        this._buildingHammer1 = new Image();
        this._buildingHammer1.src = "./assets/images/hammer.png";
        this._buildingHammer2 = new Image();
        this._buildingHammer2.src = "./assets/images/hammer.png";
        this._buildingHammer3 = new Image();
        this._buildingHammer3.src = "./assets/images/hammer.png";
        this._buildingHammer4 = new Image();
        this._buildingHammer4.src = "./assets/images/hammer.png";
        this._buildingHammer5 = new Image();
        this._buildingHammer5.src = "./assets/images/hammer.png";
        this._buildingHammer6 = new Image();
        this._buildingHammer6.src = "./assets/images/hammer.png";
        this._buildingHammer7 = new Image();
        this._buildingHammer7.src = "./assets/images/hammer.png";
        this._buildingHammer8 = new Image();
        this._buildingHammer8.src = "./assets/images/hammer.png";
        this._buildingHammer9 = new Image();
        this._buildingHammer9.src = "./assets/images/hammer.png";
        this._buildingHammer10 = new Image();
        this._buildingHammer10.src = "./assets/images/hammer.png";
        this._buildingHammer11 = new Image();
        this._buildingHammer11.src = "./assets/images/hammer.png";
        this._buildingHammer12 = new Image();
        this._buildingHammer12.src = "./assets/images/hammer.png";
        this._buildingHammer13 = new Image();
        this._buildingHammer13.src = "./assets/images/hammer.png";
        this._buildingHammer14 = new Image();
        this._buildingHammer14.src = "./assets/images/hammer.png";
        this._buildingHammer15 = new Image();
        this._buildingHammer15.src = "./assets/images/hammer.png";
    }
    ;
    clearScreen() {
        this._ctx.clearRect(0, 0, this._canvasElement.width, this._canvasElement.height);
    }
    ;
    writeTextToCanvas(text, xCoordinate, yCoordinate, fontSize = 30, color = "black", alignment = "center") {
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
    writeHammerToCanvas(element = this._buildingHammer1, xCoordinate, yCoordinate, width = this._buildingHammer1.width / 7, height = this._buildingHammer1.height / 7) {
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
        this.Music = new Audio('./assets/mp3/pokemon.mp3');
        this.drawStart = () => {
            if (this._gameController.currentScreen == 'StartScreen') {
                this._startscreen.draw();
            }
            ;
            if (this._gameController.currentScreen == 'LevelIntro1') {
                this._levelHelper.drawLevelIntro1();
            }
            ;
            if (this._gameController.currentScreen == 'Level1') {
                this._levelHelper.drawLevel1();
            }
            ;
            if (this._gameController.currentScreen == 'LevelIntro2') {
                this._levelHelper.drawLevelIntro2();
            }
            ;
            if (this._gameController.currentScreen == 'Level2') {
                this._levelHelper.drawLevel2();
            }
            ;
            if (this._gameController.currentScreen == 'Level3') {
                this._levelHelper.drawLevel3();
            }
            ;
            if (this._gameController.currentScreen == 'HelpScreen') {
                this._Helpscreen.drawHelp();
            }
            ;
            this.Discord();
        };
        this.drawHelp = () => {
            console.log(this._canvas);
            this._Helpscreen.drawHelp();
        };
        this.drawLevel = () => {
            this._levelHelper.drawLevel1();
        };
        this._canvasElement = document.getElementById('canvas');
        this._canvas = new Canvas(this._canvasElement);
        this._startscreen = new Startscreen(this._canvas);
        this._Helpscreen = new Helpscreen(this._canvas);
        this._gameController = new GameController(this._canvas);
        this._gameController.clickEventHandler();
        this._levelHelper = new LevelHelper(this._canvas);
    }
    ;
    music() {
        this.Music.loop = true;
        this.Music.play();
    }
    ;
    Discord() {
        const client = require('discord-rich-presence')('519795544558927872');
        client.updatePresence({
            state: 'KrunkerCity',
            details: '🌎',
            startTimestamp: Date.now(),
            endTimestamp: Date.now() + 1337,
            largeImageKey: 'greenenergy',
            smallImageKey: 'globe',
            instance: true,
        });
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
        this.currentScreen = 'StartScreen';
        this._startScreen = new Startscreen(this._canvasElement);
        this._helpScreen = new Helpscreen(this._canvasElement);
        this._canvas = canvas;
        this._levelHelper = new LevelHelper(this._canvas);
    }
    ;
    clickEventHandler() {
        document.addEventListener('click', (event) => {
            this.onClick(event);
        });
    }
    ;
    onClick(event) {
        if (this.currentScreen == `StartScreen`) {
            if (event.x > this._canvas.getWidth() / 40 && event.x < this._canvas.getWidth() / 40 + this._startScreen._level1background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level1background.height / 2) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 1 clicked');
                    this.currentScreen = `LevelIntro1`;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 2.9 && event.x < this._canvas.getWidth() / 2.9 + this._startScreen._level2background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level2background.height / 2) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 2 clicked');
                    this.currentScreen = `LevelIntro2`;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._startScreen._level3background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level3background.height / 2) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 3 clicked');
                    this.currentScreen = `Level3`;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._startScreen._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._startScreen._helpButton.height / 5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                }
                ;
            }
            ;
        }
        ;
        if (this.currentScreen == `LevelIntro1`) {
            if (event.x > this._canvas.getWidth() / 5 && event.x < this._canvas.getWidth() / 5 + this._levelHelper._levelIntro1.width / 1.5) {
                if (event.y > this._canvas.getHeight() / 5 && event.y < this._canvas.getHeight() / 5 + this._levelHelper._levelIntro1.height / 1.5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 1 clicked');
                    this.currentScreen = `Level1`;
                }
                ;
            }
            ;
        }
        ;
        if (this.currentScreen == `LevelIntro2`) {
            if (event.x > this._canvas.getWidth() / 5 && event.x < this._canvas.getWidth() / 5 + this._levelHelper._levelIntro1.width / 1.5) {
                if (event.y > this._canvas.getHeight() / 5 && event.y < this._canvas.getHeight() / 5 + this._levelHelper._levelIntro1.height / 1.5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 2 clicked');
                    this.currentScreen = `Level2`;
                }
                ;
            }
            ;
        }
        ;
        if (this.currentScreen == `Level1`) {
            if (event.x > this._canvas.getWidth() / 6.5 && event.x < this._canvas.getWidth() / 6.5 + this._canvas._buildingHammer1.width / 7) {
                if (event.y > this._canvas.getHeight() / 3 && event.y < this._canvas.getHeight() / 3 + this._canvas._buildingHammer1.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer1.width = this._canvas._buildingHammer1.width;
                    this._canvas._buildingHammer1.height = this._canvas._buildingHammer1.height;
                    this._canvas._buildingHammer1.src = "./assets/images/isometric_aardwarmte.png";
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 9 && event.x < this._canvas.getWidth() / 9 + this._canvas._buildingHammer2.width / 7) {
                if (event.y > this._canvas.getHeight() / 1.75 && event.y < this._canvas.getHeight() / 1.75 + this._canvas._buildingHammer2.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer2.width = this._canvas._buildingHammer2.width;
                    this._canvas._buildingHammer2.height = this._canvas._buildingHammer2.height;
                    this._canvas._buildingHammer2.src = "./assets/images/isometric_kolencentrale.png";
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 2.5 && event.x < this._canvas.getWidth() / 2.5 + this._canvas._buildingHammer3.width / 7) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._canvas._buildingHammer3.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer3.width = this._canvas._buildingHammer3.width;
                    this._canvas._buildingHammer3.height = this._canvas._buildingHammer3.height;
                    this._canvas._buildingHammer3.src = "./assets/images/isometric_kerncentrale.png";
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            this._canvas.getWidth() / 1.9, this._canvas.getHeight() / 2.5;
            if (event.x > this._canvas.getWidth() / 1.9 && event.x < this._canvas.getWidth() / 1.9 + this._canvas._buildingHammer4.width / 7) {
                if (event.y > this._canvas.getHeight() / 2.5 && event.y < this._canvas.getHeight() / 2.5 + this._canvas._buildingHammer4.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer4.width = this._canvas._buildingHammer4.width;
                    this._canvas._buildingHammer4.height = this._canvas._buildingHammer4.height;
                    this._canvas._buildingHammer4.src = "./assets/images/isometric_kolencentrale.png";
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._canvas._buildingHammer5.width / 7) {
                if (event.y > this._canvas.getHeight() / 1.9 && event.y < this._canvas.getHeight() / 1.9 + this._canvas._buildingHammer5.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer5.width = this._canvas._buildingHammer5.width;
                    this._canvas._buildingHammer5.height = this._canvas._buildingHammer5.height;
                    this._canvas._buildingHammer5.src = "./assets/images/isometric_windmolens.png";
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.32 && event.x < this._canvas.getWidth() / 1.32 + this._canvas._buildingHammer6.width / 7) {
                if (event.y > this._canvas.getHeight() / 6.5 && event.y < this._canvas.getHeight() / 6.5 + this._canvas._buildingHammer6.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer6.width = this._canvas._buildingHammer6.width;
                    this._canvas._buildingHammer6.height = this._canvas._buildingHammer6.height;
                    this._canvas._buildingHammer6.src = "./assets/images/isometric_zonnenpaneel.png";
                    this._levelHelper.money = this._levelHelper.money - 50;
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._levelHelper._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._levelHelper._helpButton.height / 5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.1 && event.x < this._canvas.getWidth() / 1.1 + this._levelHelper._menuKnop.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._levelHelper._menuKnop.height / 5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Return to StartScreen clicked');
                    this.currentScreen = `StartScreen`;
                }
                ;
            }
            ;
        }
        ;
        if (this.currentScreen == `Level2`) {
            if (event.x > this._canvas.getWidth() / 6.5 && event.x < this._canvas.getWidth() / 6.5 + this._canvas._buildingHammer7.width / 7) {
                if (event.y > this._canvas.getHeight() / 3 && event.y < this._canvas.getHeight() / 3 + this._canvas._buildingHammer7.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level2Hammer clicked");
                    this._canvas._buildingHammer7.width = this._canvas._buildingHammer7.width;
                    this._canvas._buildingHammer7.height = this._canvas._buildingHammer7.height;
                    this._canvas._buildingHammer7.src = "./assets/images/isometric_aardwarmte.png";
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 9 && event.x < this._canvas.getWidth() / 9 + this._canvas._buildingHammer8.width / 7) {
                if (event.y > this._canvas.getHeight() / 1.75 && event.y < this._canvas.getHeight() / 1.75 + this._canvas._buildingHammer8.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level2Hammer clicked");
                    this._canvas._buildingHammer8.width = this._canvas._buildingHammer8.width;
                    this._canvas._buildingHammer8.height = this._canvas._buildingHammer8.height;
                    this._canvas._buildingHammer8.src = "./assets/images/isometric_kolencentrale.png";
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._canvas._buildingHammer9.width / 7) {
                if (event.y > this._canvas.getHeight() / 1.9 && event.y < this._canvas.getHeight() / 1.9 + this._canvas._buildingHammer9.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level2Hammer clicked");
                    this._canvas._buildingHammer9.width = this._canvas._buildingHammer9.width;
                    this._canvas._buildingHammer9.height = this._canvas._buildingHammer9.height;
                    this._canvas._buildingHammer9.src = "./assets/images/isometric_windmolens.png";
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 2.44 && event.x < this._canvas.getWidth() / 2.44 + this._canvas._buildingHammer10.width / 7) {
                if (event.y > this._canvas.getHeight() / 3.9 && event.y < this._canvas.getHeight() / 3.9 + this._canvas._buildingHammer10.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level2Hammer clicked");
                    this._canvas._buildingHammer10.width = this._canvas._buildingHammer10.width;
                    this._canvas._buildingHammer10.height = this._canvas._buildingHammer10.height;
                    this._canvas._buildingHammer10.src = "./assets/images/isometric_zonnenpaneel.png";
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._levelHelper._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._levelHelper._helpButton.height / 5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.1 && event.x < this._canvas.getWidth() / 1.1 + this._levelHelper._menuKnop.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._levelHelper._menuKnop.height / 5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Return to StartScreen clicked');
                    this.currentScreen = `StartScreen`;
                }
                ;
            }
            ;
        }
        ;
        if (this.currentScreen == `Level3`) {
            if (event.x > this._canvas.getWidth() / 2.44 && event.x < this._canvas.getWidth() / 2.44 + this._canvas._buildingHammer12.width / 7) {
                if (event.y > this._canvas.getHeight() / 3.9 && event.y < this._canvas.getHeight() / 3.9 + this._canvas._buildingHammer12.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level3Hammer clicked");
                    this._canvas._buildingHammer12.width = this._canvas._buildingHammer12.width;
                    this._canvas._buildingHammer12.height = this._canvas._buildingHammer12.height;
                    this._canvas._buildingHammer12.src = "./assets/images/isometric_kolencentrale.png";
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.2 && event.x < this._canvas.getWidth() / 1.2 + this._canvas._buildingHammer13.width / 7) {
                if (event.y > this._canvas.getHeight() / 1.8 && event.y < this._canvas.getHeight() / 1.8 + this._canvas._buildingHammer13.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level3Hammer clicked");
                    this._canvas._buildingHammer13.width = this._canvas._buildingHammer13.width;
                    this._canvas._buildingHammer13.height = this._canvas._buildingHammer13.height;
                    this._canvas._buildingHammer13.src = "./assets/images/isometric_windmolens.png";
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.32 && event.x < this._canvas.getWidth() / 1.32 + this._canvas._buildingHammer14.width / 7) {
                if (event.y > this._canvas.getHeight() / 6.5 && event.y < this._canvas.getHeight() / 6.5 + this._canvas._buildingHammer14.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level3Hammer clicked");
                    this._canvas._buildingHammer14.width = this._canvas._buildingHammer14.width;
                    this._canvas._buildingHammer14.height = this._canvas._buildingHammer14.height;
                    this._canvas._buildingHammer14.src = "./assets/images/isometric_aardwarmte.png";
                    console.log(this._levelHelper.money);
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._levelHelper._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._levelHelper._helpButton.height / 5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.1 && event.x < this._canvas.getWidth() / 1.1 + this._levelHelper._menuKnop.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._levelHelper._menuKnop.height / 5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Return to StartScreen clicked');
                    this.currentScreen = `StartScreen`;
                }
                ;
            }
            ;
        }
        ;
        if (this.currentScreen == `HelpScreen`) {
            if (event.x > this._canvas.getWidth() / 7.5 && event.x < this._canvas.getWidth() / 7.5 + this._helpScreen._menuKnop.width) {
                if (event.y > this._canvas.getHeight() / 1.3 && event.y < this._canvas.getHeight() / 1.3 + this._helpScreen._menuKnop.height) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Return to StartScreen clicked');
                    this.currentScreen = `StartScreen`;
                }
                ;
            }
            ;
        }
        ;
        console.log(event.x, this._canvas.getWidth() / 1.05, this._canvas.getWidth() / 1.05 + this._startScreen._level1background.width / 5);
        console.log(event.y, this._canvas.getHeight() / 50, this._canvas.getHeight() / 50 + this._startScreen._level1background.height / 5);
    }
    ;
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
    ;
    draw() {
        this._canvas.writeImageToCanvas(this._imgSource, this._xPos, this._yPos, this._width, this._height);
    }
    ;
    getX() {
        return this._xPos;
    }
    ;
    getY() {
        return this._yPos;
    }
    ;
    getWidth() {
        return this._width;
    }
    ;
    getHeight() {
        return this._height;
    }
    ;
}
;
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
    ;
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
        this.co2 = 50;
        this.energy = 0;
        this.money = 100;
        this._levelIntroPrevent = 0;
        this.drawLevelIntro1 = () => {
            this.drawLevel1();
            this._canvas.writeImageToCanvas(this._levelIntro1, this._canvas.getWidth() / 5, this._canvas.getHeight() / 5, this._levelIntro1.width / 1.5, this._levelIntro1.height / 1.5);
        };
        this.drawLevel1 = () => {
            this._canvas.writeImageToCanvas(this._level1background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer1, this._canvas.getWidth() / 6.5, this._canvas.getHeight() / 3);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer2, this._canvas.getWidth() / 9, this._canvas.getHeight() / 1.75);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer3, this._canvas.getWidth() / 2.5, this._canvas.getHeight() / 3.5);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer4, this._canvas.getWidth() / 1.9, this._canvas.getHeight() / 2.5);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer5, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 1.9);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer6, this._canvas.getWidth() / 1.32, this._canvas.getHeight() / 6.5);
            this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7);
            this._canvas.writeImageToCanvas(this._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._helpButton.width / 5, this._helpButton.height / 5);
            this._canvas.writeImageToCanvas(this._menuKnop, this._canvas.getWidth() / 1.1, this._canvas.getHeight() / 50, this._menuKnop.width / 5, this._menuKnop.height / 5);
            this.co2 = 30;
            this.energy = 20;
            this.money = 90;
            this.drawCurrencies();
        };
        this.drawLevelIntro2 = () => {
            this._canvas.writeImageToCanvas(this._level2background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer7, this._canvas.getWidth() / 6.5, this._canvas.getHeight() / 3);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer8, this._canvas.getWidth() / 9, this._canvas.getHeight() / 1.75);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer9, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 1.9);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer10, this._canvas.getWidth() / 2.44, this._canvas.getHeight() / 3.9);
            this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7);
            this._canvas.writeImageToCanvas(this._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._helpButton.width / 5, this._helpButton.height / 5);
            this._canvas.writeImageToCanvas(this._menuKnop, this._canvas.getWidth() / 1.1, this._canvas.getHeight() / 50, this._menuKnop.width / 5, this._menuKnop.height / 5);
            this._canvas.writeImageToCanvas(this._levelIntro2, this._canvas.getWidth() / 5, this._canvas.getHeight() / 5, this._levelIntro2.width / 1.5, this._levelIntro2.height / 1.5);
            this.co2 = 40;
            this.energy = 10;
            this.money = 80;
            this.drawCurrencies();
        };
        this.drawLevel2 = () => {
            this._canvas.writeImageToCanvas(this._level2background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer7, this._canvas.getWidth() / 6.5, this._canvas.getHeight() / 3);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer8, this._canvas.getWidth() / 9, this._canvas.getHeight() / 1.75);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer9, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 1.9);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer10, this._canvas.getWidth() / 2.44, this._canvas.getHeight() / 3.9);
            this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7);
            this._canvas.writeImageToCanvas(this._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._helpButton.width / 5, this._helpButton.height / 5);
            this._canvas.writeImageToCanvas(this._menuKnop, this._canvas.getWidth() / 1.1, this._canvas.getHeight() / 50, this._menuKnop.width / 5, this._menuKnop.height / 5);
            this.co2 = 40;
            this.energy = 10;
            this.money = 80;
            this.drawCurrencies();
        };
        this.drawLevel3 = () => {
            this._canvas.writeImageToCanvas(this._level3background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer12, this._canvas.getWidth() / 2.44, this._canvas.getHeight() / 3.9);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer13, this._canvas.getWidth() / 1.2, this._canvas.getHeight() / 1.8);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer14, this._canvas.getWidth() / 1.32, this._canvas.getHeight() / 6.5);
            this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7);
            this._canvas.writeImageToCanvas(this._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._helpButton.width / 5, this._helpButton.height / 5);
            this._canvas.writeImageToCanvas(this._menuKnop, this._canvas.getWidth() / 1.1, this._canvas.getHeight() / 50, this._menuKnop.width / 5, this._menuKnop.height / 5);
            this.co2 = 50;
            this.energy = 0;
            this.money = 70;
            this.drawCurrencies();
        };
        this._canvas = canvas;
        this._level1background = new Image();
        this._level1background.src = "./assets/images/level1.png";
        this._level2background = new Image();
        this._level2background.src = "./assets/images/level2.png";
        this._level3background = new Image();
        this._level3background.src = "./assets/images/level3.png";
        this._bolt = new Image();
        this._bolt.src = "./assets/images/bolt.png";
        this._pollution = new Image();
        this._pollution.src = "./assets/images/co2.png";
        this._coins = new Image();
        this._coins.src = "./assets/images/simmoney.png";
        this._helpButton = new Image();
        this._helpButton.src = "./assets/images/questionmark.png";
        this._menuKnop = new Image();
        this._menuKnop.src = "./assets/images/menu_knop.png";
        this._levelIntro1 = new Image();
        this._levelIntro1.src = "./assets/images/level1_uitleg.png";
        this._levelIntro2 = new Image();
        this._levelIntro2.src = "./assets/images/level2_uitleg.png";
        console.log(canvas);
    }
    drawCurrencies() {
        this._canvas.writeImageToCanvas(this._bolt, this._canvas.getWidth() / 500, this._canvas.getHeight() / 10, this._bolt.width / 8, this._bolt.height / 8);
        this._canvas.writeTextToCanvas(`${this.energy}`, this._canvas.getWidth() / 14.5, this._canvas.getHeight() / 6.1, 60);
        this._canvas.writeImageToCanvas(this._pollution, this._canvas.getWidth() / 500, this._canvas.getHeight() / 60, this._pollution.width / 11, this._pollution.height / 11);
        this._canvas.writeTextToCanvas(`${this.co2}%`, this._canvas.getWidth() / 11.5, this._canvas.getHeight() / 13, 60);
        this._canvas.writeImageToCanvas(this._coins, this._canvas.getWidth() / 500, this._canvas.getHeight() / 5.5, this._coins.width / 3, this._coins.height / 3);
        this._canvas.writeTextToCanvas(`${this.money}`, this._canvas.getWidth() / 14.5, this._canvas.getHeight() / 4, 60);
    }
    ;
}
;
class Startscreen {
    constructor(canvas) {
        this.levelsUnlocked = 1;
        this.draw = () => {
            this._canvas.writeImageToCanvas(this._backgroundstart, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
            this._canvas.writeTextToCanvas("Level 1", this._canvas.getWidth() / 6, this._canvas.getHeight() / 3.6, 40);
            this._canvas.writeImageToCanvas(this._level1background, this._canvas.getWidth() / 40, this._canvas.getHeight() / 3.5, this._level1background.width / 2, this._level1background.height / 2);
            this._canvas.writeTextToCanvas("Level 2", this._canvas.getWidth() / 2, this._canvas.getHeight() / 3.6, 40);
            this._canvas.writeImageToCanvas(this._level2background, this._canvas.getWidth() / 2.9, this._canvas.getHeight() / 3.5, this._level2background.width / 2, this._level2background.height / 2);
            this._canvas.writeTextToCanvas("Level 3", this._canvas.getWidth() / 1.23, this._canvas.getHeight() / 3.6, 40);
            this._canvas.writeImageToCanvas(this._level3background, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 3.5, this._level3background.width / 2, this._level3background.height / 2);
            this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7);
            this._canvas.writeImageToCanvas(this._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._helpButton.width / 5, this._helpButton.height / 5);
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
        this._helpButton = new Image();
        this._helpButton.src = "./assets/images/questionmark.png";
    }
}
;
//# sourceMappingURL=app.js.map