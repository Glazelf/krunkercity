class Game {
    private _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private _canvas: Canvas;
    private _startscreen: Startscreen;
    private _Helpscreen: Helpscreen;
    private _gameController: GameController;

    constructor() {
        this._canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new Canvas(this._canvasElement);
        this._startscreen = new Startscreen(this._canvas);
        this._Helpscreen = new Helpscreen(this._canvas);
        this._gameController = new GameController;
        this._gameController.clickEventHandler();
    };

    public drawStart=()=>{
        //console.log(this._canvas)
        this._startscreen.draw();
    };

    // public drawHelp=()=>{
    //     console.log(this._canvas)
    //     this._Helpscreen.drawHelp();
    // };
};

window.addEventListener('load', init);
function init(): void {
    const KrunkerCity = new Game();
    window.setInterval(KrunkerCity.drawStart, 1000 / 60);
    //window.setInterval(KrunkerCity.drawHelp, 1000 / 60);
};