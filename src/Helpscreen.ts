class Helpscreen {
    private page: number
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private _canvas: Canvas;
    public _backgroundhelp: HTMLImageElement;

    constructor(canvas: Canvas){
        this._canvas = canvas;
        this._backgroundhelp = new Image();
        this._backgroundhelp.src = "./assets/images/greenenergy.jpg";
        //console.log(canvas);
    }

    public drawHelp() {
        this._canvas.writeImageToCanvas(this._backgroundhelp, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
    };
};