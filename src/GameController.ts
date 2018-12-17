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
                    this.currentScreen = `Level1`;
                };
            };

            //Button for level 2 on StartScreen
            if (event.x > this._canvas.getWidth() / 2.9 && event.x < this._canvas.getWidth() / 2.9 + this._startScreen._level1background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level1background.height / 2) {
                    //ga naar level 2
                    //*debug*
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 2 clicked');
                    this.currentScreen = `Level2`;
                };
            };

            //Button for level 3 on StartScreen
            if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._startScreen._level1background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level1background.height / 2) {
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
         * ClickHandlers for Level1
         */
        //Bouwplek trainstation
        if (this.currentScreen == `Level1`) {
            if (event.x > this._canvas.getWidth() / 6.5 && event.x < this._canvas.getWidth() / 6.5 + this._canvas._buildingHammer1.width / 7) {
                if (event.y > this._canvas.getHeight() / 3 && event.y < this._canvas.getHeight() / 3 + this._canvas._buildingHammer1.height / 7) {
                    if (this._levelHelper.money>50){
                    console.log(event.x);
                    console.log(event.y);
                    console.log("Level1Hammer clicked");
                    this._canvas._buildingHammer1.width = this._canvas._buildingHammer1.width;
                    this._canvas._buildingHammer1.height = this._canvas._buildingHammer1.height;
                    this._canvas._buildingHammer1.src = "./assets/images/isometric_kolencentrale.png";
                    this._levelHelper.money = this._levelHelper.money - 50;
                    console.log(this._levelHelper.money)
                };
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
                };
            };
        };

        //*debug*
        console.log(event.x, this._canvas.getWidth() / 1.05, this._canvas.getWidth() / 1.05 + this._startScreen._level1background.width / 5);
        console.log(event.y, this._canvas.getHeight() / 50, this._canvas.getHeight() / 50 + this._startScreen._level1background.height / 5);
    };
};