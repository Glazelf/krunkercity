class LevelHelper {
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private readonly _gameController: GameController;
    private readonly _startscreen: Startscreen;
    private _canvas: Canvas;
    private production: number;
    private _level1background: HTMLImageElement;
    private _level2background: HTMLImageElement;
    private _level3background: HTMLImageElement;
    private _bolt: HTMLImageElement;
    private _pollution: HTMLImageElement;
    private _coins: HTMLImageElement;
    public _levelIntro1: HTMLImageElement;
    public _levelIntro2: HTMLImageElement;
    public _levelIntro3: HTMLImageElement;

    constructor(canvas: Canvas) {
        this._canvas = canvas;
        //this._gameController =  new GameController(canvas);
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
    };

    public drawLevelIntro1 = (gameController: GameController) => {
        //draw level1
        this.drawLevel1(gameController);

        //levelIntro image
        this._canvas.writeImageToCanvas(this._levelIntro1, this._canvas.getWidth() / 5, this._canvas.getHeight() / 5,
            this._levelIntro1.width / 1.5, this._levelIntro1.height / 1.5)

        //ga verder image
        this._canvas.writeTextToCanvas("Ga verder", this._canvas.getWidth() / 2.1, this._canvas.getHeight() / 1.06);
        this._canvas.writeImageToCanvas(this._canvas._nextButton, this._canvas.getWidth() / 2.2, this._canvas.getHeight() / 1.23, this._canvas._nextButton.width / 5, this._canvas._nextButton.height / 5);
    };

    public drawLevel1 = (gameController: GameController) => {
        //console.log(gameController)
        //background
        this._canvas.writeImageToCanvas(this._level1background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());

        //building spots
        //trainstation
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer1, this._canvas.getWidth() / 6.5, this._canvas.getHeight() / 3);
        //leftroad
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer2, this._canvas.getWidth() / 9, this._canvas.getHeight() / 1.75);
        //largeforest
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer3, this._canvas.getWidth() / 2.5, this._canvas.getHeight() / 3.5);
        //bottomright from last one
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer4, this._canvas.getWidth() / 1.9, this._canvas.getHeight() / 2.5);
        //bottomright from last one
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer5, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 1.9);
        //mountainrange
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer6, this._canvas.getWidth() / 1.32, this._canvas.getHeight() / 6.5);
        //helpbutton
        this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7)
        this._canvas.writeImageToCanvas(this._canvas._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._canvas._helpButton.width / 5, this._canvas._helpButton.height / 5)
        //menuKnop image
        this._canvas.writeImageToCanvas(this._canvas._menuKnop, this._canvas.getWidth() / 1.1, this._canvas.getHeight() / 50,
            this._canvas._menuKnop.width / 5, this._canvas._menuKnop.height / 5)

        //currencies
        this.drawCurrencies(gameController);
        

    };

    public drawLevelIntro2 = (gameController: GameController) => {
        //draw level2
        this.drawLevel2(gameController);

        //levelIntro image
        this._canvas.writeImageToCanvas(this._levelIntro2, this._canvas.getWidth() / 5, this._canvas.getHeight() / 5,
            this._levelIntro2.width / 1.5, this._levelIntro2.height / 1.5)

        //ga verder image
        this._canvas.writeTextToCanvas("Ga verder", this._canvas.getWidth() / 2.1, this._canvas.getHeight() / 1.06);
        this._canvas.writeImageToCanvas(this._canvas._nextButton, this._canvas.getWidth() / 2.2, this._canvas.getHeight() / 1.23, this._canvas._nextButton.width / 5, this._canvas._nextButton.height / 5);
    };

    public drawLevel2 = (gameController: GameController) => {
        console.log(gameController)
        //background
        this._canvas.writeImageToCanvas(this._level2background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());

        //buildingspots
        //trainstation
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer7, this._canvas.getWidth() / 6.5, this._canvas.getHeight() / 3);
        //leftroad
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer8, this._canvas.getWidth() / 9, this._canvas.getHeight() / 1.75);
        //bottomrightcity
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer9, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 1.9);
        //park
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer10, this._canvas.getWidth() / 2.44, this._canvas.getHeight() / 3.9);
        //kanaal

        //helpbutton
        this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7)
        this._canvas.writeImageToCanvas(this._canvas._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._canvas._helpButton.width / 5, this._canvas._helpButton.height / 5)
        //menuKnop image
        this._canvas.writeImageToCanvas(this._canvas._menuKnop, this._canvas.getWidth() / 1.1, this._canvas.getHeight() / 50,
            this._canvas._menuKnop.width / 5, this._canvas._menuKnop.height / 5)

        //currencies
        this.drawCurrencies(gameController);
    };

    public drawLevelIntro3 = (gameController: GameController) => {
        console.log(gameController)
        //draw level 3
        this.drawLevel3(gameController);

        //levelIntro image
        this._canvas.writeImageToCanvas(this._levelIntro3, this._canvas.getWidth() / 5, this._canvas.getHeight() / 5,
            this._levelIntro3.width / 1.5, this._levelIntro3.height / 1.5);

        //ga verder image
        this._canvas.writeTextToCanvas("Ga verder", this._canvas.getWidth() / 2.1, this._canvas.getHeight() / 1.06);
        this._canvas.writeImageToCanvas(this._canvas._nextButton, this._canvas.getWidth() / 2.2, this._canvas.getHeight() / 1.23, this._canvas._nextButton.width / 5, this._canvas._nextButton.height / 5);
    };

    public drawLevel3 = (gameController: GameController) => {
        //background
        this._canvas.writeImageToCanvas(this._level3background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());

        //buildingspots
        //park
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer12, this._canvas.getWidth() / 2.44, this._canvas.getHeight() / 3.9);
        //rightroad
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer13, this._canvas.getWidth() / 1.2, this._canvas.getHeight() / 1.8);
        //mountainrange
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer14, this._canvas.getWidth() / 1.32, this._canvas.getHeight() / 6.5);
        //kanaal

        //helpbutton
        this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7);
        this._canvas.writeImageToCanvas(this._canvas._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._canvas._helpButton.width / 5, this._canvas._helpButton.height / 5)
        //menuKnop image
        this._canvas.writeImageToCanvas(this._canvas._menuKnop, this._canvas.getWidth() / 1.1, this._canvas.getHeight() / 50,
            this._canvas._menuKnop.width / 5, this._canvas._menuKnop.height / 5);

        //currencies
        this.drawCurrencies(gameController);
    };

    public drawCurrencies(gameController: GameController = null) {
        gameController.assignCurrencies();
        //energy
        this._canvas.writeImageToCanvas(this._bolt, this._canvas.getWidth() / 500, this._canvas.getHeight() / 10, this._bolt.width / 8, this._bolt.height / 8);
        this._canvas.writeTextToCanvas(`${gameController.energy}`, this._canvas.getWidth() / 14.5, this._canvas.getHeight() / 6.1, 60);

        //co2
        this._canvas.writeImageToCanvas(this._pollution, this._canvas.getWidth() / 500, this._canvas.getHeight() / 60, this._pollution.width / 11, this._pollution.height / 11);
        this._canvas.writeTextToCanvas(`${gameController.co2}%`, this._canvas.getWidth() / 11.5, this._canvas.getHeight() / 13, 60)

        //money
        this._canvas.writeImageToCanvas(this._coins, this._canvas.getWidth() / 500, this._canvas.getHeight() / 5.5, this._coins.width / 3, this._coins.height / 3);
        this._canvas.writeTextToCanvas(`${gameController.money}`, this._canvas.getWidth() / 14.5, this._canvas.getHeight() / 4, 60);
        console.log(gameController.money);

        //*debug*
        //console.log(`drawCurrencies is working`);
    };
};