class Startscreen {
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private _game: Game;
    private _canvas: Canvas;
    private _levelHelper: LevelHelper;
    private levelsUnlocked: number = 1;
    private userName: string;
    public _backgroundstart: HTMLImageElement;
    public _level1background: HTMLImageElement;
    public _level2background: HTMLImageElement;
    public _level3background: HTMLImageElement;

    constructor(canvas: Canvas) {
        this._canvas = canvas;
        this._backgroundstart = new Image();
        this._backgroundstart.src = "./assets/images/greenenergy.jpg";
        this._level1background = new Image();
        this._level1background.src = "./assets/images/level1bubble.png";
        this._level2background = new Image();
        this._level2background.src = "./assets/images/level2bubble.png";
        this._level3background = new Image();
        this._level3background.src = "./assets/images/level3bubble.png";
        //console.log(canvas);
    }

    public draw = () => {
        // this._canvas.writeImageToCanvas(this._level1background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
        this._canvas.writeImageToCanvas(this._backgroundstart, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
        this._canvas.writeImageToCanvas(this._level1background, this._canvas.getWidth() / 40, this._canvas.getHeight() / 3.5, this._level1background.width / 2, this._level1background.height / 2);
        this._canvas.writeImageToCanvas(this._level2background, this._canvas.getWidth() / 2.9, this._canvas.getHeight() / 3.5, this._level2background.width / 2, this._level2background.height / 2);
        this._canvas.writeImageToCanvas(this._level3background, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 3.5, this._level3background.width / 2, this._level3background.height / 2);
    };
};