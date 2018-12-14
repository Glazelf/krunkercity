class Game {
    private _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private _canvas: Canvas;
    private _startscreen: Startscreen;
    private _Helpscreen: Helpscreen;
    private _gameController: GameController;
    private _levelHelper: LevelHelper;

    constructor() {
        this._canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new Canvas(this._canvasElement);
        this._startscreen = new Startscreen(this._canvas);
        this._Helpscreen = new Helpscreen(this._canvas);
        this._gameController = new GameController(this._canvas);
        this._gameController.clickEventHandler();
        this._levelHelper = new LevelHelper(this._canvas)
    };

    public drawStart = () => {
        //console.log(this._canvas)
        this._startscreen.draw();
    };

    public drawHelp = () => {
        console.log(this._canvas)
        this._Helpscreen.drawHelp();
    };

    public drawLevel = () => {
        //this._levelHelper.drawLevel1();
        //this._levelHelper.drawLevel2();
        this._levelHelper.drawLevel3();
    }

};

window.addEventListener('load', init);
function init(): void {
    const KrunkerCity = new Game();
    // window.setInterval(KrunkerCity.drawStart, 1000 / 60);
    // window.setInterval(KrunkerCity.drawHelp, 1000 / 60);
    window.setInterval(KrunkerCity.drawLevel, 1000 / 60);
};

