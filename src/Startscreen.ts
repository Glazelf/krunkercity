class Startscreen {
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private _game: Game;
    private _canvas: Canvas;
    private levelsUnlocked: number;
    private userName: string;
    public _backgroundstart: HTMLImageElement;
    public _level1background: HTMLImageElement;
    public _level2background: HTMLImageElement;
    public _level3background: HTMLImageElement;

    constructor(canvas: Canvas) {
        this._canvas = canvas;
        this._backgroundstart = new Image()
        this._backgroundstart.src = "./assets/images/greenenergy.jpg"
        this._level1background = new Image()
        this._level1background.src = ""
        this._level2background = new Image()
        this._level2background.src = "./assets/images/level2.png"
        this._level3background = new Image()
        this._level3background.src = "./assets/images/level3.png"
        console.log(canvas);
    }

    public draw = () => {
        this._canvas.writeImageToCanvas(this._backgroundstart, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
        this._canvas.writeImageToCanvas(this._level2background, this._canvas.getWidth() / 15 * 1.2, this._canvas.getHeight() / 3, this._level2background.width / 4, this._level2background.height / 4)
        this._canvas.writeImageToCanvas(this._level2background, this._canvas.getWidth() / 15 * 5 * 1.2, this._canvas.getHeight() / 3, this._level2background.width / 4, this._level2background.height / 4)
        this._canvas.writeImageToCanvas(this._level3background, this._canvas.getWidth() / 15 * 9 * 1.2, this._canvas.getHeight() / 3, this._level2background.width / 4, this._level2background.height / 4)
    };
};