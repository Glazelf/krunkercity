class GameController {
    private readonly _startScreen: Startscreen;
    private readonly _helpScreen: Helpscreen;
    private readonly _canvas: Canvas;
    private readonly _canvasElement: Canvas;
    private _levelHelper: LevelHelper;
    public currentScreen: string = 'StartScreen';

    public constructor(canvas: Canvas) {
        this._startScreen = new Startscreen(this._canvasElement);
        this._helpScreen = new Helpscreen(this._canvasElement);
        this._canvas = canvas;
        this._levelHelper = new LevelHelper(this._canvas);
    };

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
            if (event.x > this._canvas.getWidth() / 40 && event.x < this._canvas.getWidth() / 40 + this._startScreen._level1background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level1background.height / 2) {
                    //ga naar level 1
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 1 clicked');
                    this.currentScreen = `LevelIntro1`;
                };
            };

            //Button for level 2 on StartScreen
            if (event.x > this._canvas.getWidth() / 2.9 && event.x < this._canvas.getWidth() / 2.9 + this._startScreen._level2background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level2background.height / 2) {
                    //ga naar level 2
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 2 clicked');
                    this.currentScreen = `LevelIntro2`;
                };
            };

            //Button for level 3 on StartScreen
            if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._startScreen._level3background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level3background.height / 2) {
                    //ga naar level 3
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 3 clicked');
                    this.currentScreen = `Level3`;
                };
            };

            //Button for HelpScreen on StartScreen
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._startScreen._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._startScreen._helpButton.height / 5) {
                    //ga naar HelpScreen
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                };
            };
        };

        /**
         * ClickHandlers for LevelIntro1
         */
        if (this.currentScreen == `LevelIntro1`) {
            //Button for Level 1 on StartScreen
            if (event.x > this._canvas.getWidth() / 5 && event.x < this._canvas.getWidth() / 5 + this._levelHelper._levelIntro1.width / 1.5) {
                if (event.y > this._canvas.getHeight() / 5 && event.y < this._canvas.getHeight() / 5 + this._levelHelper._levelIntro1.height / 1.5) {
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
         * ClickHandlers for Level1
         */
        if (this.currentScreen == `Level1`) {
            //Bouwplek trainstation
            if (event.x > this._canvas.getWidth() / 6.5 && event.x < this._canvas.getWidth() / 6.5 + this._canvas._buildingHammer1.width / 7) {
                if (event.y > this._canvas.getHeight() / 3 && event.y < this._canvas.getHeight() / 3 + this._canvas._buildingHammer1.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer1.width = this._canvas._buildingHammer1.width;
                    this._canvas._buildingHammer1.height = this._canvas._buildingHammer1.height;
                    this._canvas._buildingHammer1.src = "./assets/images/isometric_aardwarmte.png";
                    console.log(this._levelHelper.money);
                };
            };

            //Bouwplek leftroad
            if (event.x > this._canvas.getWidth() / 9 && event.x < this._canvas.getWidth() / 9 + this._canvas._buildingHammer2.width / 7) {
                if (event.y > this._canvas.getHeight() / 1.75 && event.y < this._canvas.getHeight() / 1.75 + this._canvas._buildingHammer2.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer2.width = this._canvas._buildingHammer2.width;
                    this._canvas._buildingHammer2.height = this._canvas._buildingHammer2.height;
                    this._canvas._buildingHammer2.src = "./assets/images/isometric_kolencentrale.png";
                    console.log(this._levelHelper.money);
                };
            };

            //Bouwplek large forest
            if (event.x > this._canvas.getWidth() / 2.5 && event.x < this._canvas.getWidth() / 2.5 + this._canvas._buildingHammer3.width / 7) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._canvas._buildingHammer3.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer3.width = this._canvas._buildingHammer3.width;
                    this._canvas._buildingHammer3.height = this._canvas._buildingHammer3.height;
                    this._canvas._buildingHammer3.src = "./assets/images/isometric_kerncentrale.png";
                    console.log(this._levelHelper.money);
                };
            };

            this._canvas.getWidth() / 1.9, this._canvas.getHeight() / 2.5
            //bottomright from last one
            if (event.x > this._canvas.getWidth() / 1.9 && event.x < this._canvas.getWidth() / 1.9 + this._canvas._buildingHammer4.width / 7) {
                if (event.y > this._canvas.getHeight() / 2.5 && event.y < this._canvas.getHeight() / 2.5 + this._canvas._buildingHammer4.height / 7) {

                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer4.width = this._canvas._buildingHammer4.width;
                    this._canvas._buildingHammer4.height = this._canvas._buildingHammer4.height;
                    this._canvas._buildingHammer4.src = "./assets/images/isometric_kolencentrale.png";
                    console.log(this._levelHelper.money);
                };
            };

            //bottomright from last one
            if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._canvas._buildingHammer5.width / 7) {
                if (event.y > this._canvas.getHeight() / 1.9 && event.y < this._canvas.getHeight() / 1.9 + this._canvas._buildingHammer5.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer5.width = this._canvas._buildingHammer5.width;
                    this._canvas._buildingHammer5.height = this._canvas._buildingHammer5.height;
                    this._canvas._buildingHammer5.src = "./assets/images/isometric_windmolens.png";
                    console.log(this._levelHelper.money);
                };
            };

            //mountainrange
            if (event.x > this._canvas.getWidth() / 1.32 && event.x < this._canvas.getWidth() / 1.32 + this._canvas._buildingHammer6.width / 7) {
                if (event.y > this._canvas.getHeight() / 6.5 && event.y < this._canvas.getHeight() / 6.5 + this._canvas._buildingHammer6.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer6.width = this._canvas._buildingHammer6.width;
                    this._canvas._buildingHammer6.height = this._canvas._buildingHammer6.height;
                    this._canvas._buildingHammer6.src = "./assets/images/isometric_zonnenpaneel.png";
                    this._levelHelper.money = this._levelHelper.money - 50;
                    console.log(this._levelHelper.money)
                };
            };

            //Button for HelpScreen on Level1
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._levelHelper._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._levelHelper._helpButton.height / 5) {
                    //ga naar HelpScreen
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                };
            };

            //Button for returning to StartScreen on level1
            if (event.x > this._canvas.getWidth() / 1.1 && event.x < this._canvas.getWidth() / 1.1 + this._levelHelper._menuKnop.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._levelHelper._menuKnop.height / 5) {
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
            if (event.x > this._canvas.getWidth() / 6.5 && event.x < this._canvas.getWidth() / 6.5 + this._canvas._buildingHammer7.width / 7) {
                if (event.y > this._canvas.getHeight() / 3 && event.y < this._canvas.getHeight() / 3 + this._canvas._buildingHammer7.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level2Hammer clicked");
                    this._canvas._buildingHammer7.width = this._canvas._buildingHammer7.width;
                    this._canvas._buildingHammer7.height = this._canvas._buildingHammer7.height;
                    this._canvas._buildingHammer7.src = "./assets/images/isometric_aardwarmte.png";
                    console.log(this._levelHelper.money);
                };
            };

            //Bouwplek leftroad
            if (event.x > this._canvas.getWidth() / 9 && event.x < this._canvas.getWidth() / 9 + this._canvas._buildingHammer8.width / 7) {
                if (event.y > this._canvas.getHeight() / 1.75 && event.y < this._canvas.getHeight() / 1.75 + this._canvas._buildingHammer8.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level2Hammer clicked");
                    this._canvas._buildingHammer8.width = this._canvas._buildingHammer8.width;
                    this._canvas._buildingHammer8.height = this._canvas._buildingHammer8.height;
                    this._canvas._buildingHammer8.src = "./assets/images/isometric_kolencentrale.png";
                    console.log(this._levelHelper.money);
                };
            };

            //Bouwplek bottomrightcity
            if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._canvas._buildingHammer9.width / 7) {
                if (event.y > this._canvas.getHeight() / 1.9 && event.y < this._canvas.getHeight() / 1.9 + this._canvas._buildingHammer9.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level2Hammer clicked");
                    this._canvas._buildingHammer9.width = this._canvas._buildingHammer9.width;
                    this._canvas._buildingHammer9.height = this._canvas._buildingHammer9.height;
                    this._canvas._buildingHammer9.src = "./assets/images/isometric_windmolens.png";
                    console.log(this._levelHelper.money);
                };
            };

            //Bouwplek park
            if (event.x > this._canvas.getWidth() / 2.44 && event.x < this._canvas.getWidth() / 2.44 + this._canvas._buildingHammer10.width / 7) {
                if (event.y > this._canvas.getHeight() / 3.9 && event.y < this._canvas.getHeight() / 3.9 + this._canvas._buildingHammer10.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level2Hammer clicked");
                    this._canvas._buildingHammer10.width = this._canvas._buildingHammer10.width;
                    this._canvas._buildingHammer10.height = this._canvas._buildingHammer10.height;
                    this._canvas._buildingHammer10.src = "./assets/images/isometric_zonnenpaneel.png";
                    console.log(this._levelHelper.money);
                };
            };

            //Button for HelpScreen on Level2
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._levelHelper._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._levelHelper._helpButton.height / 5) {
                    //ga naar HelpScreen
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                };
            };

            //Button for returning to StartScreen on level2
            if (event.x > this._canvas.getWidth() / 1.1 && event.x < this._canvas.getWidth() / 1.1 + this._levelHelper._menuKnop.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._levelHelper._menuKnop.height / 5) {
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
            if (event.x > this._canvas.getWidth() / 2.44 && event.x < this._canvas.getWidth() / 2.44 + this._canvas._buildingHammer12.width / 7) {
                if (event.y > this._canvas.getHeight() / 3.9 && event.y < this._canvas.getHeight() / 3.9 + this._canvas._buildingHammer12.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level3Hammer clicked");
                    this._canvas._buildingHammer12.width = this._canvas._buildingHammer12.width;
                    this._canvas._buildingHammer12.height = this._canvas._buildingHammer12.height;
                    this._canvas._buildingHammer12.src = "./assets/images/isometric_kolencentrale.png";
                    console.log(this._levelHelper.money);
                };
            };

            //Bouwplek rightroad
            if (event.x > this._canvas.getWidth() / 1.2 && event.x < this._canvas.getWidth() / 1.2 + this._canvas._buildingHammer13.width / 7) {
                if (event.y > this._canvas.getHeight() / 1.8 && event.y < this._canvas.getHeight() / 1.8 + this._canvas._buildingHammer13.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level3Hammer clicked");
                    this._canvas._buildingHammer13.width = this._canvas._buildingHammer13.width;
                    this._canvas._buildingHammer13.height = this._canvas._buildingHammer13.height;
                    this._canvas._buildingHammer13.src = "./assets/images/isometric_windmolens.png";
                    console.log(this._levelHelper.money);
                };
            };

            //Bouwplek mountainrange
            if (event.x > this._canvas.getWidth() / 1.32 && event.x < this._canvas.getWidth() / 1.32 + this._canvas._buildingHammer14.width / 7) {
                if (event.y > this._canvas.getHeight() / 6.5 && event.y < this._canvas.getHeight() / 6.5 + this._canvas._buildingHammer14.height / 7) {
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level3Hammer clicked");
                    this._canvas._buildingHammer14.width = this._canvas._buildingHammer14.width;
                    this._canvas._buildingHammer14.height = this._canvas._buildingHammer14.height;
                    this._canvas._buildingHammer14.src = "./assets/images/isometric_aardwarmte.png";
                    console.log(this._levelHelper.money);
                };
            };

            //Bouwplek kanaal
            
            //Button for HelpScreen on Level3
            if (event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._levelHelper._helpButton.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._levelHelper._helpButton.height / 5) {
                    //ga naar HelpScreen
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('HelpScreen clicked');
                    this.currentScreen = `HelpScreen`;
                };
            };
            //Button for returning to StartScreen on level3
            if (event.x > this._canvas.getWidth() / 1.1 && event.x < this._canvas.getWidth() / 1.1 + this._levelHelper._menuKnop.width / 5) {
                if (event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._levelHelper._menuKnop.height / 5) {
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
            if (event.x > this._canvas.getWidth() / 7.5 && event.x < this._canvas.getWidth() / 7.5 + this._helpScreen._menuKnop.width) {
                if (event.y > this._canvas.getHeight() / 1.3 && event.y < this._canvas.getHeight() / 1.3 + this._helpScreen._menuKnop.height) {
                    //ga terug naar StartScreen
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Return to StartScreen clicked');
                    this.currentScreen = `StartScreen`;
                };
            };
        };

        //*debug*
        console.log(event.x, this._canvas.getWidth() / 1.05, this._canvas.getWidth() / 1.05 + this._startScreen._level1background.width / 5);
        console.log(event.y, this._canvas.getHeight() / 50, this._canvas.getHeight() / 50 + this._startScreen._level1background.height / 5);
    };
};