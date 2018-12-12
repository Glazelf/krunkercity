class LevelHelper{
    protected readonly _canvasElement: HTMLCanvasElement;
    protected readonly _ctx: CanvasRenderingContext2D;
    protected _canvas: Canvas;
    protected co2: number;
    protected energy: number;
    protected money: number;
    protected production: number;
    public _level1background: HTMLImageElement;
    public _level2background: HTMLImageElement;
    public _level3background: HTMLImageElement;

    constructor(canvas: Canvas) {
        this._canvas = canvas;
        this._level1background = new Image();
        this._level1background.src = "./assets/images/level1bubble.png";
        this._level2background = new Image();
        this._level2background.src = "./assets/images/level2bubble.png";
        this._level3background = new Image();
        this._level3background.src = "./assets/images/level3bubble.png";
        console.log(canvas);
    }

    public drawBuildSpots(){
        
    };
};