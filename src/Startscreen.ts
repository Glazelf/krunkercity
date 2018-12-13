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
    public xPosLevel1Background: number;
    public yPosLevel1Background: number;
    public xPosLevel2Background: number;
    public yPosLevel2Background: number;
    public xPosLevel3Background: number;
    public yPosLevel3Background: number;

    constructor(canvas: Canvas) {
        this._canvas = canvas;
        this._backgroundstart = new Image()
        this._backgroundstart.src = "./assets/images/greenenergy.jpg"
        this._level1background = new Image()
        this._level1background.src = ""
        this.xPosLevel1Background = this._canvas.getWidth() / 40;
        this.yPosLevel1Background = this._canvas.getHeight() / 4;
        this._level2background = new Image()
        this._level2background.src = "./assets/images/level2.png"
        this.xPosLevel2Background = this._canvas.getWidth() / 40 * 5;
        this.yPosLevel2Background = this._canvas.getHeight() / 4;
        this._level3background = new Image()
        this._level3background.src = "./assets/images/level3.png"
        this.xPosLevel3Background = this._canvas.getWidth() / 40 * 9;
        this.yPosLevel3Background = this._canvas.getHeight() / 4;
        //console.log(canvas);
    }

    public draw = () => {
        this._canvas.writeImageToCanvas(this._backgroundstart, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
        this._canvas.writeImageToCanvas(this._level1background, this._canvas.getWidth() / 15, this._canvas.getHeight() / 3, this._level1background.width / 4, this._level1background.height / 4)
        this._canvas.writeImageToCanvas(this._level2background, this._canvas.getWidth() / 15 * 5, this._canvas.getHeight() / 3, this._level2background.width / 4, this._level2background.height / 4)
        this._canvas.writeImageToCanvas(this._level3background, this._canvas.getWidth() / 15 * 9, this._canvas.getHeight() / 3, this._level2background.width / 4, this._level2background.height / 4)
    };
};