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
        this._helpButton = new Image();
        this._helpButton.src = "./assets/images/questionmark.png";
        this._menuKnop = new Image();
        this._menuKnop.src = "./assets/images/menu_knop.png";
        this._nextButton = new Image();
        this._nextButton.src = "./assets/images/next_button.png";
    }
    ;
    clearScreen() {
        this._ctx.clearRect(0, 0, this._canvasElement.width, this._canvasElement.height);
    }
    ;
    writeTextToCanvas(text, xCoordinate, yCoordinate, fontSize = 30, color = "black", alignment = "center") {
        this._ctx.font = `${fontSize}px Helvetica`;
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
        this.playPromise = this.Music.play();
        this.drawStart = () => {
            if (this._gameController.currentScreen == 'StartScreen') {
                this._startscreen.draw();
            }
            ;
            if (this._gameController.currentScreen == 'LevelIntro1') {
                this._levelHelper.drawLevelIntro1(this._gameController);
            }
            ;
            if (this._gameController.currentScreen == 'Level1') {
                this._levelHelper.drawLevel1(this._gameController);
            }
            ;
            if (this._gameController.currentScreen == 'LevelIntro2') {
                this._levelHelper.drawLevelIntro2(this._gameController);
            }
            ;
            if (this._gameController.currentScreen == 'Level2') {
                this._levelHelper.drawLevel2(this._gameController);
            }
            ;
            if (this._gameController.currentScreen == 'LevelIntro3') {
                this._levelHelper.drawLevelIntro3(this._gameController);
            }
            ;
            if (this._gameController.currentScreen == 'Level3') {
                this._levelHelper.drawLevel3(this._gameController);
            }
            ;
            if (this._gameController.currentScreen == 'HelpScreen') {
                this._helpscreen.drawHelp();
            }
            ;
        };
        this.drawHelp = () => {
            console.log(this._canvas);
            this._helpscreen.drawHelp();
        };
        this._canvasElement = document.getElementById('canvas');
        this._canvas = new Canvas(this._canvasElement);
        this._startscreen = new Startscreen(this._canvas);
        this._helpscreen = new Helpscreen(this._canvas);
        this._gameController = new GameController(this._canvas);
        this._gameController.clickEventHandler();
        this._levelHelper = new LevelHelper(this._canvas);
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
        this.co2 = 1;
        this.energy = 1;
        this.money = 1;
        this.income = 0;
        this.energyGain = 0;
        this.co2Spread = 0;
        this.currentScreen = 'StartScreen';
        this._startscreen = new Startscreen(this._canvasElement);
        this._helpscreen = new Helpscreen(this._canvasElement);
        this._canvas = canvas;
        this._aardwarmte = new Image();
        this._aardwarmte.src = "./assets/images/isometric_aardwarmte.png";
        this._aardwarmte.width = this._aardwarmte.width * 3;
        this._aardwarmte.height = this._aardwarmte.height * 3;
        this._kerncentrale = new Image();
        this._kerncentrale.src = "./assets/images/isometric_kerncentrale.png";
        this._kerncentrale.width = this._kerncentrale.width * 1.2;
        this._kerncentrale.height = this._kerncentrale.height * 1.2;
        this._kolencentrale = new Image();
        this._kolencentrale.src = "./assets/images/isometric_kolencentrale.png";
        this._kolencentrale.width = this._kolencentrale.width * 1.2;
        this._kolencentrale.height = this._kolencentrale.height * 1.2;
        this._stuwdam = new Image();
        this._stuwdam.src = "./assets/images/isometric_stuwdam.png";
        this._stuwdam.width = this._stuwdam.width * 1.2;
        this._stuwdam.height = this._stuwdam.height * 1.2;
        this._windmolens = new Image();
        this._windmolens.src = "./assets/images/isometric_windmolens.png";
        this._windmolens.width = this._windmolens.width * 1.2;
        this._windmolens.height = this._windmolens.height * 1.2;
        this._zonnepaneel = new Image();
        this._zonnepaneel.src = "./assets/images/isometric_zonnenpaneel.png";
        this._zonnepaneel.width = this._zonnepaneel.width * 1.2;
        this._zonnepaneel.height = this._zonnepaneel.height * 1.2;
        this.timer();
    }
    ;
    assignCurrencies() {
        if (this.currentScreen == `Level1`) {
            if (this._gameItem == null) {
                this._gameItem = new GameItem(60, 20, 90);
            }
            ;
            this.co2 = this._gameItem.getCo2();
            this.energy = this._gameItem.getEnergy();
            this.money = this._gameItem.getMoney();
        }
        ;
        if (this.currentScreen == `Level2`) {
            if (this._gameItem == null) {
                this._gameItem = new GameItem(20, 10, 80);
            }
            ;
            this.co2 = this._gameItem.getCo2();
            this.energy = this._gameItem.getEnergy();
            this.money = this._gameItem.getMoney();
        }
        ;
        if (this.currentScreen == `Level3`) {
            if (this._gameItem == null) {
                this._gameItem = new GameItem(10, 0, 70);
            }
            ;
            this.co2 = this._gameItem.getCo2();
            this.energy = this._gameItem.getEnergy();
            this.money = this._gameItem.getMoney();
        }
    }
    ;
    increaseIncome(amount) {
        this.income += amount;
    }
    increaseEnergyGain(amount) {
        this.energyGain += amount;
    }
    increaseCo2Spread(amount) {
        this.co2Spread += amount;
    }
    timer() {
        setInterval(() => this.updateCurrencies(), 1500);
        console.log(`tick`);
    }
    updateCurrencies() {
        console.log(`I am looping`);
        this._gameItem.changeMoney(this.income);
        this._gameItem.changeEnergy(this.energyGain);
        this._gameItem.changeCo2(this.co2Spread);
    }
    clickEventHandler() {
        document.addEventListener('click', (event) => {
            this.onClick(event);
        });
    }
    ;
    onClick(event) {
        if (this.currentScreen == `StartScreen`) {
            if (event.x > this._canvas.getWidth() / 40 && event.x < this._canvas.getWidth() / 40 + this._startscreen._level1background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startscreen._level1background.height / 2) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 1 clicked');
                    this.currentScreen = `LevelIntro1`;
                    document.getElementById("wintext").innerHTML = ``;
                }
                ;
            }
            ;
            if (this._startscreen._levelsUnlocked > 1) {
                if (event.x > this._canvas.getWidth() / 2.9 && event.x < this._canvas.getWidth() / 2.9 + this._startscreen._level2background.width / 2) {
                    if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startscreen._level2background.height / 2) {
                        console.log(event.x);
                        console.log(event.y);
                        console.log('Level 2 clicked');
                        this.currentScreen = `LevelIntro2`;
                        document.getElementById("wintext").innerHTML = ``;
                    }
                    ;
                }
                ;
            }
            ;
            if (this._startscreen._levelsUnlocked > 2) {
                if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._startscreen._level3background.width / 2) {
                    if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startscreen._level3background.height / 2) {
                        console.log(event.x);
                        console.log(event.y);
                        console.log('Level 3 clicked');
                        this.currentScreen = `LevelIntro3`;
                        document.getElementById("wintext").innerHTML = ``;
                    }
                    ;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._canvas._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._helpButton.height / 5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                    document.getElementById("wintext").innerHTML = ``;
                }
                ;
            }
            ;
        }
        ;
        if (this.currentScreen == `LevelIntro1`) {
            if (event.x > this._canvas.getWidth() / 2.2 && event.x < this._canvas.getWidth() / 2.2 + this._canvas._nextButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 1.23 && event.y < this._canvas.getHeight() / 1.23 + this._canvas._nextButton.height / 5) {
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
            if (event.x > this._canvas.getWidth() / 2.2 && event.x < this._canvas.getWidth() / 2.2 + this._canvas._nextButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 1.23 && event.y < this._canvas.getHeight() / 1.23 + this._canvas._nextButton.height / 5) {
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
        if (this.currentScreen == `LevelIntro3`) {
            if (event.x > this._canvas.getWidth() / 2.2 && event.x < this._canvas.getWidth() / 2.2 + this._canvas._nextButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 1.23 && event.y < this._canvas.getHeight() / 1.23 + this._canvas._nextButton.height / 5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 3 clicked');
                    this.currentScreen = `Level3`;
                }
                ;
            }
            ;
        }
        ;
        if (this.currentScreen == `Level1`) {
            if (this._canvas._buildingHammer1.src !== this._aardwarmte.src) {
                if (event.x > this._canvas.getWidth() / 6.5 && event.x < this._canvas.getWidth() / 6.5 + this._canvas._buildingHammer1.width / 7) {
                    if (event.y > this._canvas.getHeight() / 3 && event.y < this._canvas.getHeight() / 3 + this._canvas._buildingHammer1.height / 7) {
                        if (this.money >= 150) {
                            console.log(event.x, event.y);
                            console.log("Level1Hammer clicked");
                            this._canvas._buildingHammer1.width = this._canvas._buildingHammer1.width;
                            this._canvas._buildingHammer1.height = this._canvas._buildingHammer1.height;
                            this._canvas._buildingHammer1.src = this._aardwarmte.src;
                            this._gameItem.changeMoney(-150);
                            alert(`Je hebt een aardwarmtecentrale gebouwd!`);
                            this.income += 8;
                            this.energyGain += 3;
                            this.co2Spread -= 0.5;
                        }
                        else {
                            alert(`Je hebt nog ${150 - this.money} munten nodig om de aardwarmtecentrale te bouwen!`);
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
            if (this._canvas._buildingHammer2.src !== this._aardwarmte.src) {
                if (event.x > this._canvas.getWidth() / 9 && event.x < this._canvas.getWidth() / 9 + this._canvas._buildingHammer2.width / 7) {
                    if (event.y > this._canvas.getHeight() / 1.75 && event.y < this._canvas.getHeight() / 1.75 + this._canvas._buildingHammer2.height / 7) {
                        if (this.money >= 150) {
                            console.log(event.x, event.y);
                            console.log("Level1Hammer clicked");
                            this._canvas._buildingHammer2.width = this._canvas._buildingHammer2.width;
                            this._canvas._buildingHammer2.height = this._canvas._buildingHammer2.height;
                            this._canvas._buildingHammer2.src = this._aardwarmte.src;
                            this._gameItem.changeMoney(-150);
                            this.income += 8;
                            this.energyGain += 3;
                            this.co2Spread -= 0.5;
                            alert(`Je hebt een aardwarmtecentrale gebouwd!`);
                        }
                        else {
                            alert(`Je hebt nog ${150 - this.money} munten nodig om de aardwarmtecentrale te bouwen!`);
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
            if (this._canvas._buildingHammer3.src !== this._kerncentrale.src) {
                if (event.x > this._canvas.getWidth() / 2.5 && event.x < this._canvas.getWidth() / 2.5 + this._canvas._buildingHammer3.width / 7) {
                    if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._canvas._buildingHammer3.height / 7) {
                        if (this.money >= 400) {
                            console.log(event.x, event.y);
                            console.log("Level1Hammer clicked");
                            this._canvas._buildingHammer3.width = this._canvas._buildingHammer3.width;
                            this._canvas._buildingHammer3.height = this._canvas._buildingHammer3.height;
                            this._canvas._buildingHammer3.src = this._kerncentrale.src;
                            this._gameItem.changeMoney(-400);
                            alert(`Je hebt een kerncentrale gebouwd!`);
                            this.income += 12;
                            this.energyGain += 8;
                            this.co2Spread += 3.5;
                        }
                        else {
                            alert(`Je hebt nog ${400 - this.money} munten nodig om de kerncentrale te bouwen!`);
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
            if (this._canvas._buildingHammer4.src !== this._aardwarmte.src) {
                if (event.x > this._canvas.getWidth() / 1.9 && event.x < this._canvas.getWidth() / 1.9 + this._canvas._buildingHammer4.width / 7) {
                    if (event.y > this._canvas.getHeight() / 2.5 && event.y < this._canvas.getHeight() / 2.5 + this._canvas._buildingHammer4.height / 7) {
                        if (this.money >= 50) {
                            console.log(event.x, event.y);
                            console.log("Level1Hammer clicked");
                            this._canvas._buildingHammer4.width = this._canvas._buildingHammer4.width;
                            this._canvas._buildingHammer4.height = this._canvas._buildingHammer4.height;
                            this._canvas._buildingHammer4.src = this._kolencentrale.src;
                            this._gameItem.changeMoney(-50);
                            alert(`Je hebt een kolencentrale gebouwd!`);
                            this.income += 6;
                            this.energyGain += 2;
                            this.co2Spread += 2;
                        }
                        else {
                            alert(`je hebt nog ${50 - this.money} munten nodig om de kolencentrale te bouwen!`);
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
            if (this._canvas._buildingHammer5.src !== this._windmolens.src) {
                if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._canvas._buildingHammer5.width / 7) {
                    if (event.y > this._canvas.getHeight() / 1.9 && event.y < this._canvas.getHeight() / 1.9 + this._canvas._buildingHammer5.height / 7) {
                        if (this.money >= 80) {
                            console.log(event.x);
                            console.log(event.y);
                            console.log("Level1Hammer clicked");
                            this._canvas._buildingHammer5.width = this._canvas._buildingHammer5.width;
                            this._canvas._buildingHammer5.height = this._canvas._buildingHammer5.height;
                            this._canvas._buildingHammer5.src = this._windmolens.src;
                            this._gameItem.changeMoney(-80);
                            alert(`Je hebt een windmolen gebouwd!`);
                            this.income += 4;
                            this.energyGain += 1;
                            this.co2Spread -= 1.5;
                        }
                        else {
                            alert(`Je hebt nog ${80 - this.money} munten nodig om de windmolen te bouwen!`);
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
            if (this._canvas._buildingHammer6.src !== this._zonnepaneel.src) {
                if (event.x > this._canvas.getWidth() / 1.32 && event.x < this._canvas.getWidth() / 1.32 + this._canvas._buildingHammer6.width / 7) {
                    if (event.y > this._canvas.getHeight() / 6.5 && event.y < this._canvas.getHeight() / 6.5 + this._canvas._buildingHammer6.height / 7) {
                        if (this.money >= 90) {
                            console.log(event.x);
                            console.log(event.y);
                            console.log("Level1Hammer clicked");
                            this._canvas._buildingHammer6.width = this._canvas._buildingHammer6.width;
                            this._canvas._buildingHammer6.height = this._canvas._buildingHammer6.height;
                            this._canvas._buildingHammer6.src = this._zonnepaneel.src;
                            this._gameItem.changeMoney(-90);
                            alert(`Je hebt een zonnepaneel gebouwd!`);
                            this.income += 4;
                            this.energyGain += 2;
                            this.co2Spread -= 1.5;
                        }
                        else {
                            alert(`Je hebt nog ${90 - this.money} munten nodig om de zonnepanelen te bouwen!`);
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._canvas._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._helpButton.height / 5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.1 && event.x < this._canvas.getWidth() / 1.1 + this._canvas._menuKnop.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._menuKnop.height / 5) {
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
            if (this._canvas._buildingHammer7.src !== this._aardwarmte.src) {
                if (event.x > this._canvas.getWidth() / 6.5 && event.x < this._canvas.getWidth() / 6.5 + this._canvas._buildingHammer7.width / 7) {
                    if (event.y > this._canvas.getHeight() / 3 && event.y < this._canvas.getHeight() / 3 + this._canvas._buildingHammer7.height / 7) {
                        console.log(event.x);
                        console.log(event.y);
                        console.log("Level2Hammer clicked");
                        this._canvas._buildingHammer7.width = this._canvas._buildingHammer7.width;
                        this._canvas._buildingHammer7.height = this._canvas._buildingHammer7.height;
                        this._canvas._buildingHammer7.src = this._aardwarmte.src;
                        console.log(this.money);
                    }
                    ;
                }
                ;
            }
            ;
            if (this._canvas._buildingHammer8.src !== this._aardwarmte.src) {
                if (event.x > this._canvas.getWidth() / 9 && event.x < this._canvas.getWidth() / 9 + this._canvas._buildingHammer8.width / 7) {
                    if (event.y > this._canvas.getHeight() / 1.75 && event.y < this._canvas.getHeight() / 1.75 + this._canvas._buildingHammer8.height / 7) {
                        console.log(event.x);
                        console.log(event.y);
                        console.log("Level2Hammer clicked");
                        this._canvas._buildingHammer8.width = this._canvas._buildingHammer8.width;
                        this._canvas._buildingHammer8.height = this._canvas._buildingHammer8.height;
                        this._canvas._buildingHammer8.src = this._aardwarmte.src;
                        console.log(this.money);
                    }
                    ;
                }
                ;
            }
            ;
            if (this._canvas._buildingHammer9.src !== this._aardwarmte.src) {
                if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._canvas._buildingHammer8.width / 7) {
                    if (event.y > this._canvas.getHeight() / 1.9 && event.y < this._canvas.getHeight() / 1.9 + this._canvas._buildingHammer8.height / 7) {
                        console.log(event.x);
                        console.log(event.y);
                        console.log("Level2Hammer clicked");
                        this._canvas._buildingHammer9.width = this._canvas._buildingHammer9.width;
                        this._canvas._buildingHammer9.height = this._canvas._buildingHammer9.height;
                        this._canvas._buildingHammer9.src = this._aardwarmte.src;
                        console.log(this.money);
                    }
                    ;
                }
                ;
            }
            ;
            if (this._canvas._buildingHammer10.src !== this._aardwarmte.src) {
                if (event.x > this._canvas.getWidth() / 2.44 && event.x < this._canvas.getWidth() / 2.44 + this._canvas._buildingHammer10.width / 7) {
                    if (event.y > this._canvas.getHeight() / 3.9 && event.y < this._canvas.getHeight() / 3.9 + this._canvas._buildingHammer10.height / 7) {
                        console.log(event.x);
                        console.log(event.y);
                        console.log("Level2Hammer clicked");
                        this._canvas._buildingHammer10.width = this._canvas._buildingHammer10.width;
                        this._canvas._buildingHammer10.height = this._canvas._buildingHammer10.height;
                        this._canvas._buildingHammer10.src = this._aardwarmte.src;
                        console.log(this.money);
                    }
                    ;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._canvas._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._helpButton.height / 5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.1 && event.x < this._canvas.getWidth() / 1.1 + this._canvas._menuKnop.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._menuKnop.height / 5) {
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
            if (this._canvas._buildingHammer12.src !== this._kolencentrale.src) {
                if (event.x > this._canvas.getWidth() / 2.44 && event.x < this._canvas.getWidth() / 2.44 + this._canvas._buildingHammer12.width / 7) {
                    if (event.y > this._canvas.getHeight() / 3.9 && event.y < this._canvas.getHeight() / 3.9 + this._canvas._buildingHammer12.height / 7) {
                        console.log(event.x);
                        console.log(event.y);
                        console.log("Level3Hammer clicked");
                        this._canvas._buildingHammer12.width = this._canvas._buildingHammer12.width;
                        this._canvas._buildingHammer12.height = this._canvas._buildingHammer12.height;
                        this._canvas._buildingHammer12.src = this._kolencentrale.src;
                        console.log(this.money);
                    }
                    ;
                }
                ;
            }
            ;
            if (this._canvas._buildingHammer13.src !== this._windmolens.src) {
                if (event.x > this._canvas.getWidth() / 1.2 && event.x < this._canvas.getWidth() / 1.2 + this._canvas._buildingHammer13.width / 7) {
                    if (event.y > this._canvas.getHeight() / 1.8 && event.y < this._canvas.getHeight() / 1.8 + this._canvas._buildingHammer13.height / 7) {
                        console.log(event.x);
                        console.log(event.y);
                        console.log("Level3Hammer clicked");
                        this._canvas._buildingHammer13.width = this._canvas._buildingHammer13.width;
                        this._canvas._buildingHammer13.height = this._canvas._buildingHammer13.height;
                        this._canvas._buildingHammer13.src = this._windmolens.src;
                        console.log(this.money);
                    }
                    ;
                }
                ;
            }
            ;
            if (this._canvas._buildingHammer14.src !== this._aardwarmte.src) {
                if (event.x > this._canvas.getWidth() / 1.32 && event.x < this._canvas.getWidth() / 1.32 + this._canvas._buildingHammer14.width / 7) {
                    if (event.y > this._canvas.getHeight() / 6.5 && event.y < this._canvas.getHeight() / 6.5 + this._canvas._buildingHammer14.height / 7) {
                        console.log(event.x);
                        console.log(event.y);
                        console.log("Level3Hammer clicked");
                        this._canvas._buildingHammer14.width = this._canvas._buildingHammer14.width;
                        this._canvas._buildingHammer14.height = this._canvas._buildingHammer14.height;
                        this._canvas._buildingHammer14.src = this._aardwarmte.src;
                        console.log(this.money);
                    }
                    ;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._canvas._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._helpButton.height / 5) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                }
                ;
            }
            ;
            if (event.x > this._canvas.getWidth() / 1.1 && event.x < this._canvas.getWidth() / 1.1 + this._canvas._menuKnop.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._menuKnop.height / 5) {
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
            if (event.x > this._canvas.getWidth() / 7.5 && event.x < this._canvas.getWidth() / 7.5 + this._helpscreen._menuKnop.width) {
                if (event.y > this._canvas.getHeight() / 1.3 && event.y < this._canvas.getHeight() / 1.3 + this._helpscreen._menuKnop.height) {
                    this.currentScreen = `StartScreen`;
                }
                ;
            }
            ;
        }
        ;
        if (this.co2 == 0 && this.energy >= 100 && this.currentScreen == `Level1`) {
            console.log(this._startscreen._levelsUnlocked);
            this.currentScreen = `StartScreen`;
            document.getElementById("wintext").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-left:34%;margin-top:-8%;color:black;font-size:96px'>Gewonnen!</span>`;
            this._startscreen._levelsUnlocked = 2;
            this.co2 = 1;
            console.log(this._startscreen._levelsUnlocked);
        }
        ;
        if (this.co2 <= 0 && this.energy >= 200 && this.currentScreen == `Level2`) {
            this._startscreen._levelsUnlocked = 3;
            this.currentScreen = `StartScreen`;
            document.getElementById("wintext").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-left:34%;margin-top:-8%;color:black;font-size:96px'>Gewonnen!</span>`;
            this.co2 = 1;
        }
        ;
        if (this.co2 <= 0 && this.energy >= 750 && this.currentScreen == `Level3`) {
            this.currentScreen = `StartScreen`;
            document.getElementById("wintext").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-left:34%;margin-top:-8%;color:black;font-size:96px'>Gewonnen!</span>`;
            this.co2 = 1;
        }
        ;
        if (this.co2 >= 100 && this.currentScreen == `Level1`) {
            this.currentScreen = `StartScreen`;
            document.getElementById("wintext").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-left:34%;margin-top:-8%;color:black;font-size:96px'>Verloren!</span>`;
            this.co2 = 1;
        }
        ;
    }
    ;
}
class GameItem {
    constructor(co2, energy, money) {
        this.co2 = 1;
        this.energy = 1;
        this.money = 1;
        this.co2 = co2;
        this.energy = energy;
        this.money = money;
    }
    ;
    getCo2() {
        return this.co2;
    }
    ;
    getEnergy() {
        return this.energy;
    }
    ;
    getMoney() {
        return this.money;
    }
    ;
    changeMoney(amount) {
        this.money += amount;
    }
    changeEnergy(amount) {
        this.energy += amount;
    }
    changeCo2(amount) {
        this.co2 += amount;
    }
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
        this.drawLevelIntro1 = (gameController) => {
            this.drawLevel1(gameController);
            this._canvas.writeImageToCanvas(this._levelIntro1, this._canvas.getWidth() / 5, this._canvas.getHeight() / 5, this._levelIntro1.width / 1.5, this._levelIntro1.height / 1.5);
            this._canvas.writeTextToCanvas("Ga verder", this._canvas.getWidth() / 2.1, this._canvas.getHeight() / 1.06);
            this._canvas.writeImageToCanvas(this._canvas._nextButton, this._canvas.getWidth() / 2.2, this._canvas.getHeight() / 1.23, this._canvas._nextButton.width / 5, this._canvas._nextButton.height / 5);
        };
        this.drawLevel1 = (gameController) => {
            this._canvas.writeImageToCanvas(this._level1background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer1, this._canvas.getWidth() / 6.5, this._canvas.getHeight() / 3);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer2, this._canvas.getWidth() / 9, this._canvas.getHeight() / 1.75);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer3, this._canvas.getWidth() / 2.5, this._canvas.getHeight() / 3.5);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer4, this._canvas.getWidth() / 1.9, this._canvas.getHeight() / 2.5);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer5, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 1.9);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer6, this._canvas.getWidth() / 1.32, this._canvas.getHeight() / 6.5);
            this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7);
            this._canvas.writeImageToCanvas(this._canvas._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._canvas._helpButton.width / 5, this._canvas._helpButton.height / 5);
            this._canvas.writeImageToCanvas(this._canvas._menuKnop, this._canvas.getWidth() / 1.1, this._canvas.getHeight() / 50, this._canvas._menuKnop.width / 5, this._canvas._menuKnop.height / 5);
            this.drawCurrencies(gameController);
        };
        this.drawLevelIntro2 = (gameController) => {
            this.drawLevel2(gameController);
            this._canvas.writeImageToCanvas(this._levelIntro2, this._canvas.getWidth() / 5, this._canvas.getHeight() / 5, this._levelIntro2.width / 1.5, this._levelIntro2.height / 1.5);
            this._canvas.writeTextToCanvas("Ga verder", this._canvas.getWidth() / 2.1, this._canvas.getHeight() / 1.06);
            this._canvas.writeImageToCanvas(this._canvas._nextButton, this._canvas.getWidth() / 2.2, this._canvas.getHeight() / 1.23, this._canvas._nextButton.width / 5, this._canvas._nextButton.height / 5);
        };
        this.drawLevel2 = (gameController) => {
            console.log(gameController);
            this._canvas.writeImageToCanvas(this._level2background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer7, this._canvas.getWidth() / 6.5, this._canvas.getHeight() / 3);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer8, this._canvas.getWidth() / 9, this._canvas.getHeight() / 1.75);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer9, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 1.9);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer10, this._canvas.getWidth() / 2.44, this._canvas.getHeight() / 3.9);
            this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7);
            this._canvas.writeImageToCanvas(this._canvas._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._canvas._helpButton.width / 5, this._canvas._helpButton.height / 5);
            this._canvas.writeImageToCanvas(this._canvas._menuKnop, this._canvas.getWidth() / 1.1, this._canvas.getHeight() / 50, this._canvas._menuKnop.width / 5, this._canvas._menuKnop.height / 5);
            this.drawCurrencies(gameController);
        };
        this.drawLevelIntro3 = (gameController) => {
            console.log(gameController);
            this.drawLevel3(gameController);
            this._canvas.writeImageToCanvas(this._levelIntro3, this._canvas.getWidth() / 5, this._canvas.getHeight() / 5, this._levelIntro3.width / 1.5, this._levelIntro3.height / 1.5);
            this._canvas.writeTextToCanvas("Ga verder", this._canvas.getWidth() / 2.1, this._canvas.getHeight() / 1.06);
            this._canvas.writeImageToCanvas(this._canvas._nextButton, this._canvas.getWidth() / 2.2, this._canvas.getHeight() / 1.23, this._canvas._nextButton.width / 5, this._canvas._nextButton.height / 5);
        };
        this.drawLevel3 = (gameController) => {
            this._canvas.writeImageToCanvas(this._level3background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer12, this._canvas.getWidth() / 2.44, this._canvas.getHeight() / 3.9);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer13, this._canvas.getWidth() / 1.2, this._canvas.getHeight() / 1.8);
            this._canvas.writeHammerToCanvas(this._canvas._buildingHammer14, this._canvas.getWidth() / 1.32, this._canvas.getHeight() / 6.5);
            this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7);
            this._canvas.writeImageToCanvas(this._canvas._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._canvas._helpButton.width / 5, this._canvas._helpButton.height / 5);
            this._canvas.writeImageToCanvas(this._canvas._menuKnop, this._canvas.getWidth() / 1.1, this._canvas.getHeight() / 50, this._canvas._menuKnop.width / 5, this._canvas._menuKnop.height / 5);
            this.drawCurrencies(gameController);
        };
        this._canvas = canvas;
        this._startscreen = new Startscreen(canvas);
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
        this._levelIntro1 = new Image();
        this._levelIntro1.src = "./assets/images/level1_uitleg.png";
        this._levelIntro2 = new Image();
        this._levelIntro2.src = "./assets/images/level2_uitleg.png";
        this._levelIntro3 = new Image();
        this._levelIntro3.src = "./assets/images/level3_uitleg.png";
        console.log(canvas);
    }
    ;
    drawCurrencies(gameController = null) {
        gameController.assignCurrencies();
        this._canvas.writeImageToCanvas(this._bolt, this._canvas.getWidth() / 500, this._canvas.getHeight() / 10, this._bolt.width / 8, this._bolt.height / 8);
        this._canvas.writeTextToCanvas(`${gameController.energy}`, this._canvas.getWidth() / 14.5, this._canvas.getHeight() / 6.1, 60);
        this._canvas.writeImageToCanvas(this._pollution, this._canvas.getWidth() / 500, this._canvas.getHeight() / 60, this._pollution.width / 11, this._pollution.height / 11);
        this._canvas.writeTextToCanvas(`${gameController.co2}%`, this._canvas.getWidth() / 11.5, this._canvas.getHeight() / 13, 60);
        this._canvas.writeImageToCanvas(this._coins, this._canvas.getWidth() / 500, this._canvas.getHeight() / 5.5, this._coins.width / 3, this._coins.height / 3);
        this._canvas.writeTextToCanvas(`${gameController.money}`, this._canvas.getWidth() / 14.5, this._canvas.getHeight() / 4, 60);
    }
    ;
}
;
class Startscreen {
    constructor(canvas) {
        this._levelsUnlocked = 1;
        this.draw = () => {
            this._canvas.writeImageToCanvas(this._backgroundstart, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
            this._canvas.writeTextToCanvas("Level 1", this._canvas.getWidth() / 6, this._canvas.getHeight() / 3.6, 40);
            this._canvas.writeImageToCanvas(this._level1background, this._canvas.getWidth() / 40, this._canvas.getHeight() / 3.5, this._level1background.width / 2, this._level1background.height / 2);
            this._canvas.writeTextToCanvas("Level 2", this._canvas.getWidth() / 2, this._canvas.getHeight() / 3.6, 40);
            if (this._levelsUnlocked == 2 || this._levelsUnlocked == 3) {
                this._canvas.writeImageToCanvas(this._level2background, this._canvas.getWidth() / 2.9, this._canvas.getHeight() / 3.5, this._level2background.width / 2, this._level2background.height / 2);
            }
            else {
                this._canvas.writeImageToCanvas(this._level2locked, this._canvas.getWidth() / 2.9, this._canvas.getHeight() / 3.5, this._level2background.width / 2, this._level2background.height / 2);
            }
            ;
            this._canvas.writeTextToCanvas("Level 3", this._canvas.getWidth() / 1.23, this._canvas.getHeight() / 3.6, 40);
            if (this._levelsUnlocked == 3) {
                this._canvas.writeImageToCanvas(this._level3background, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 3.5, this._level3background.width / 2, this._level3background.height / 2);
            }
            else {
                this._canvas.writeImageToCanvas(this._level3locked, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 3.5, this._level3background.width / 2, this._level3background.height / 2);
            }
            ;
            this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7);
            this._canvas.writeImageToCanvas(this._canvas._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._canvas._helpButton.width / 5, this._canvas._helpButton.height / 5);
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
        this._level2locked = new Image();
        this._level2locked.src = "./assets/images/level2locked.png";
        this._level3locked = new Image();
        this._level3locked.src = "./assets/images/level3locked.png";
        this._levelIntro1 = new Image();
        this._levelIntro1.src = "./assets/images/level1_uitleg.png";
        this._levelIntro2 = new Image();
        this._levelIntro2.src = "./assets/images/level2_uitleg.png";
    }
    ;
}
;
//# sourceMappingURL=app.js.map