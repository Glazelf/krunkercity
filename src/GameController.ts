class GameController {
    private readonly _startscreen: Startscreen;
    private readonly _helpscreen: Helpscreen;
    private readonly _canvas: Canvas;
    private readonly _canvasElement: Canvas;
    private _gameItem: GameItem;
    public co2: number = 1;
    public energy: number = 1;
    public money: number = 1;
    private income: number = 0;
    private energyGain: number = 0;
    private co2Spread: number = 0;
    public currentScreen: string = 'StartScreen';
    public _aardwarmte: HTMLImageElement;
    public _kerncentrale: HTMLImageElement;
    public _kolencentrale: HTMLImageElement;
    public _stuwdam: HTMLImageElement;
    public _windmolens: HTMLImageElement;
    public _zonnepaneel: HTMLImageElement;

    public constructor(canvas: Canvas) {
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
    };

    public assignCurrencies() {
        if (this.currentScreen == `Level1`) {
            if (this._gameItem == null) {
                this._gameItem = new GameItem(60, 20, 90);
            };
            this.co2 = this._gameItem.getCo2();
            this.energy = this._gameItem.getEnergy();
            this.money = this._gameItem.getMoney();
        };
        if (this.currentScreen == `Level2`) {
            if (this._gameItem == null) {
                this._gameItem = new GameItem(20, 10, 80);
            };
            this.co2 = this._gameItem.getCo2();
            this.energy = this._gameItem.getEnergy();
            this.money = this._gameItem.getMoney();
        };
        if (this.currentScreen == `Level3`) {
            if (this._gameItem == null) {
                this._gameItem = new GameItem(10, 0, 70);
            };
            this.co2 = this._gameItem.getCo2();
            this.energy = this._gameItem.getEnergy();
            this.money = this._gameItem.getMoney();
        }
        // console.log(this.currentScreen);
        // console.log(this.co2, this.energy, this.money);
        // console.log(this._gameItem.getCo2, this._gameItem.getEnergy(), this._gameItem.getMoney());
    };

    public increaseIncome(amount: number) {
        this.income += amount;
    }

    public increaseEnergyGain(amount: number) {
        this.energyGain += amount;
    }

    public increaseCo2Spread(amount: number) {
        this.co2Spread += amount;
    }

    public timer() {
        setInterval(() => this.updateCurrencies(), 1500);
        console.log(`tick`);
    }

    public updateCurrencies() {
        console.log(`I am looping`);
        this._gameItem.changeMoney(this.income);
        this._gameItem.changeEnergy(this.energyGain);
        this._gameItem.changeCo2(this.co2Spread);
    }

    public clickEventHandler(): void {
        document.addEventListener('click', (event: MouseEvent) => {
            this.onClick(event);
        });
    };

    private onClick(event: any): void {
        /**
         * ClickHandlers for StartScreen
         */
        if (this.currentScreen == `StartScreen`) {

            //Button for Level 1 on StartScreen
            if (event.x > this._canvas.getWidth() / 40 && event.x < this._canvas.getWidth() / 40 + this._startscreen._level1background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startscreen._level1background.height / 2) {
                    //ga naar level 1
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 1 clicked');
                    this.currentScreen = `LevelIntro1`;
                    document.getElementById("wintext").innerHTML = ``;
                    document.getElementById("title").innerHTML = ``;
                };
            };

            //Button for level 2 on StartScreen
            if (this._startscreen._levelsUnlocked > 1) {
                if (event.x > this._canvas.getWidth() / 2.9 && event.x < this._canvas.getWidth() / 2.9 + this._startscreen._level2background.width / 2) {
                    if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startscreen._level2background.height / 2) {
                        //ga naar level 2
                        //*debug*
                        console.log(event.x);
                        console.log(event.y);
                        console.log('Level 2 clicked');
                        this.currentScreen = `LevelIntro2`;
                        document.getElementById("wintext").innerHTML = ``;
                        document.getElementById("title").innerHTML = ``;
                    };
                };
            };

            //Button for level 3 on StartScreen
            if (this._startscreen._levelsUnlocked > 2) {
                if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._startscreen._level3background.width / 2) {
                    if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startscreen._level3background.height / 2) {
                        //ga naar level 3
                        //*debug*
                        console.log(event.x);
                        console.log(event.y);
                        console.log('Level 3 clicked');
                        this.currentScreen = `LevelIntro3`;
                        document.getElementById("wintext").innerHTML = ``;
                        document.getElementById("title").innerHTML = ``;
                    };
                };
            };

            //Button for HelpScreen on StartScreen
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._canvas._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._helpButton.height / 5) {
                    //ga naar HelpScreen
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                    document.getElementById("wintext").innerHTML = ``;
                    document.getElementById("title").innerHTML = ``;
                };
            };
        };

        /**
         * ClickHandlers for LevelIntro1
         */
        if (this.currentScreen == `LevelIntro1`) {
            //Button for Level 1 on StartScreen
            if (event.x > this._canvas.getWidth() / 2.2 && event.x < this._canvas.getWidth() / 2.2 + this._canvas._nextButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 1.23 && event.y < this._canvas.getHeight() / 1.23 + this._canvas._nextButton.height / 5) {
                    //ga naar level 1
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 1 clicked');
                    this.currentScreen = `Level1`;
                };
            };
        };

        /**
         * ClickHandlers for LevelIntro2
         */
        if (this.currentScreen == `LevelIntro2`) {
            //Button for Level 2 on StartScreen
            if (event.x > this._canvas.getWidth() / 2.2 && event.x < this._canvas.getWidth() / 2.2 + this._canvas._nextButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 1.23 && event.y < this._canvas.getHeight() / 1.23 + this._canvas._nextButton.height / 5) {
                    //ga naar level 2
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 2 clicked');
                    this.currentScreen = `Level2`;
                };
            };
        };

        /**
         * ClickHandlers for LevelIntro3
         */
        if (this.currentScreen == `LevelIntro3`) {
            //Button for Level 3 on StartScreen
            if (event.x > this._canvas.getWidth() / 2.2 && event.x < this._canvas.getWidth() / 2.2 + this._canvas._nextButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 1.23 && event.y < this._canvas.getHeight() / 1.23 + this._canvas._nextButton.height / 5) {
                    //ga naar level 3
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 3 clicked');
                    this.currentScreen = `Level3`;
                };
            };
        };

        /**
         * ClickHandlers for Level1
         */
        if (this.currentScreen == `Level1`) {
            //Bouwplek trainstation
            //this.assignCurrencies();
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
                        } else {
                            alert(`Je hebt nog ${150 - this.money} munten nodig om de aardwarmtecentrale te bouwen!`);
                        };
                    };
                };
            };


            //Bouwplek leftroad
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
                        } else {
                            alert(`Je hebt nog ${150 - this.money} munten nodig om de aardwarmtecentrale te bouwen!`);
                        };
                    };
                };
            };

            //Bouwplek large forest
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
                            //console.log(this.money);
                        } else {
                            alert(`Je hebt nog ${400 - this.money} munten nodig om de kerncentrale te bouwen!`);
                        };
                    };
                };
            };

            //bottomright from last one
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
                        } else {
                            alert(`je hebt nog ${50 - this.money} munten nodig om de kolencentrale te bouwen!`);
                        };
                    };
                };
            };

            //bottomright from last one
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
                        } else {
                            alert(`Je hebt nog ${80 - this.money} munten nodig om de windmolen te bouwen!`);
                        };
                    };
                };
            };

            //mountainrange
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
                        } else {
                            alert(`Je hebt nog ${90 - this.money} munten nodig om de zonnepanelen te bouwen!`);
                        };
                    };
                };
            };

            //Button for HelpScreen on Level1
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._canvas._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._helpButton.height / 5) {
                    //ga naar HelpScreen
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                };
            };

            //Button for returning to StartScreen on level1
            if (event.x > this._canvas.getWidth() / 1.1 && event.x < this._canvas.getWidth() / 1.1 + this._canvas._menuKnop.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._menuKnop.height / 5) {
                    //ga terug naar StartScreen
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Return to StartScreen clicked');
                    this.currentScreen = `StartScreen`;
                };
            };
        };

        /**
         *ClickHandlers for Level2
         */
        if (this.currentScreen == `Level2`) {
            //Bouwplek trainstation
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
                    };
                };
            };

            //Bouwplek leftroad
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
                    };
                };
            };

            //bouwplek bottomrightcity
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
                    };
                };
            };

            //bouwplek park
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
                    };
                };
            };

            //Button for HelpScreen on Level2
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._canvas._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._helpButton.height / 5) {
                    //ga naar HelpScreen
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                };
            };

            //Button for returning to StartScreen on level2
            if (event.x > this._canvas.getWidth() / 1.1 && event.x < this._canvas.getWidth() / 1.1 + this._canvas._menuKnop.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._menuKnop.height / 5) {
                    //ga terug naar StartScreen
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Return to StartScreen clicked');
                    this.currentScreen = `StartScreen`;
                };
            };
        };

        /**
        *ClickHandlers for Level3
        */
        if (this.currentScreen == `Level3`) {
            //Bouwplek park
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
                    };
                };
            };

            //Bouwplek rightroad
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
                    };
                };
            };

            //Bouwplek mountainrange
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
                    };
                };
            };

            //Bouwplek kanaal

            //Button for HelpScreen on Level3
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._canvas._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._helpButton.height / 5) {
                    //ga naar HelpScreen
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                };
            };
            //Button for returning to StartScreen on level3
            if (event.x > this._canvas.getWidth() / 1.1 && event.x < this._canvas.getWidth() / 1.1 + this._canvas._menuKnop.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._canvas._menuKnop.height / 5) {
                    //ga terug naar StartScreen
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Return to StartScreen clicked');
                    this.currentScreen = `StartScreen`;
                };
            };
        };

        /**
         * ClickHandlers for HelpScreen
         */
        //Button for returning to StartScreen from HelpScreen
        if (this.currentScreen == `HelpScreen`) {
            if (event.x > this._canvas.getWidth() / 7.5 && event.x < this._canvas.getWidth() / 7.5 + this._helpscreen._menuKnop.width) {
                if (event.y > this._canvas.getHeight() / 1.3 && event.y < this._canvas.getHeight() / 1.3 + this._helpscreen._menuKnop.height) {
                    //ga terug naar StartScreen
                    //*debug*
                    //console.log(event.x);
                    //console.log(event.y);
                    //console.log('Return to StartScreen clicked');
                    this.currentScreen = `StartScreen`;
                };
            };
        };

       //winning level 1
        if (this.co2 <= 0 && this.energy >= 100 && this.currentScreen == `Level1`) {
            console.log(this._startscreen._levelsUnlocked)
            
            this.currentScreen = `StartScreen`;
            document.getElementById("wintext").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-left:34%;margin-top:-8%;color:black;font-size:96px'>Gewonnen!</span>`;
            this._startscreen._levelsUnlocked = 2;
            this.co2 = 1;
           console.log(this._startscreen._levelsUnlocked)
        };

        //winning level 2
        if (this.co2 <= 0 && this.energy >= 200 && this.currentScreen == `Level2`) {
            this._startscreen._levelsUnlocked = 3;
            this.currentScreen = `StartScreen`;
            document.getElementById("wintext").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-left:34%;margin-top:-8%;color:black;font-size:96px'>Gewonnen!</span>`;
            this.co2 = 1;
        };

        //winning level 3
        if (this.co2 <= 0 && this.energy >= 750 && this.currentScreen == `Level3`) {
            this.currentScreen = `StartScreen`;
            document.getElementById("wintext").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-left:34%;margin-top:-8%;color:black;font-size:96px'>Gewonnen!</span>`;
            this.co2 = 1;
        };

        //losing level 1
        if(this.co2 >= 100 && this.currentScreen == `Level1` ){
            this.currentScreen = `StartScreen`;
            document.getElementById("wintext").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-left:34%;margin-top:-8%;color:black;font-size:96px'>Verloren!</span>`;
            this.co2 = 1;
        };

        //*debug*
        //console.log(event.x, this._canvas.getWidth() / 1.05, this._canvas.getWidth() / 1.05 + this._startscreen._level1background.width / 5);
        //console.log(event.y, this._canvas.getHeight() / 50, this._canvas.getHeight() / 50 + this._startscreen._level1background.height / 5);
    };
}