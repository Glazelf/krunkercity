class Game {
    private _canvasElement: HTMLCanvasElement;
    private _canvas: Canvas;
    private _startscreen: Startscreen;
    private _helpscreen: Helpscreen;
    private _gameController: GameController;
    private _levelHelper: LevelHelper;
    private Music = new Audio('./assets/mp3/pokemon.mp3');
    private playPromise = this.Music.play();

    constructor() {
        this._canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new Canvas(this._canvasElement);
        this._startscreen = new Startscreen(this._canvas);
        this._helpscreen = new Helpscreen(this._canvas);
        this._gameController = new GameController(this._canvas);
        this._gameController.clickEventHandler();
        this._levelHelper = new LevelHelper(this._canvas);
        // this.music();
    }

    public drawStart = () => {
        //console.log(this._canvas)
        if (this._gameController.currentScreen == 'StartScreen') {
            this._startscreen.draw();
            document.getElementById("playtime").innerHTML = ``;
        };
        if (this._gameController.currentScreen == 'LevelIntro1') {
            this._levelHelper.drawLevelIntro1(this._gameController);
            document.getElementById("playtime").innerHTML = ``;
        };
        if (this._gameController.currentScreen == 'Level1') {
            this._levelHelper.drawLevel1(this._gameController);
            this._gameController.playtime();
            this.drawTimer();
        };
        if (this._gameController.currentScreen == 'LevelIntro2') {
            this._levelHelper.drawLevelIntro2(this._gameController);
            document.getElementById("playtime").innerHTML = ``;
        };
        if (this._gameController.currentScreen == 'Level2') {
            this._levelHelper.drawLevel2(this._gameController);
            this._gameController.playtime();
            this.drawTimer();
        };
        if (this._gameController.currentScreen == 'LevelIntro3') {
            this._levelHelper.drawLevelIntro3(this._gameController);
            document.getElementById("playtime").innerHTML = ``;
        };
        if (this._gameController.currentScreen == 'Level3') {
            this._levelHelper.drawLevel3(this._gameController);
            this._gameController.playtime();
            this.drawTimer();

        };
        if (this._gameController.currentScreen == 'HelpScreen') {
            this._helpscreen.drawHelp();
            document.getElementById("playtime").innerHTML = ``;
        };
    };

    public drawHelp = () => {
        console.log(this._canvas)
        this._helpscreen.drawHelp();
    }

    public drawTimer() {
        document.getElementById("playtime").innerHTML = `<span style=font-family:helvetica;float:left;position:relative;margin-left:32%;margin-top:-5%;color:black;font-size:48px>Je hebt al ${Math.floor(this._gameController._playtimeMinutes / 60 / 60)} minuten en ${Math.round(this._gameController._playtimeSeconds / 60)} seconden gespeeld!</span>`
        if (Math.round(this._gameController._playtimeSeconds / 60) == 60) {
            this._gameController._playtimeSeconds = 0;
        };
    };

    // public drawLevel = () => {
    // this._levelHelper.drawLevel1();
    //this._levelHelper.drawLevel2();
    //this._levelHelper.drawLevel3();
    // }

    public music() {
        if (this.playPromise !== null) {
            this.Music.loop = true;
            this.Music.play();
        };
    };
};

window.addEventListener('load', init);
function init(): void {
    const KrunkerCity = new Game();
    window.setInterval(KrunkerCity.drawStart, 1000 / 60);
    //window.setInterval(KrunkerCity.drawHelp, 1000 / 60);
    //window.setInterval(KrunkerCity.drawLevel, 1000 / 60);
}