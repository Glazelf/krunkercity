class Helpscreen {
    private page: number
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private _canvas: Canvas;
    public _backgroundhelp: HTMLImageElement;
    public _textBubble: HTMLImageElement;
    public _zonnenPaneel: HTMLImageElement;
    public _windMolen: HTMLImageElement;

    constructor(canvas: Canvas){
        this._canvas = canvas;
        this._backgroundhelp = new Image()
        this._backgroundhelp.src = "./assets/images/greenenergy.jpg"
        this._textBubble = new Image()
        this._textBubble.src = "./assets/images/text_bubblecolored.png"
        this._zonnenPaneel = new Image()
        this._zonnenPaneel.src = "./assets/images/isometric_zonnenpaneel.png"
        this._windMolen = new Image()
        this._windMolen.src = "./assets/images/isometric_windmolens.png"
        
    }

    public drawHelp() {
        this._canvas.writeImageToCanvas(this._backgroundhelp, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
        this._canvas.writeImageToCanvas(this._textBubble, this._canvas.getWidth() / 4, this._canvas.getHeight() / 64, this._textBubble.width * 1.2, this._textBubble.height * 1.2)
        this._canvas.writeImageToCanvas(this._zonnenPaneel, this._canvas.getWidth() / 8, this._canvas.getHeight() / 64, this._textBubble.width , this._textBubble.height )
        this._canvas.writeImageToCanvas(this._windMolen, this._canvas.getWidth() / 6, this._canvas.getHeight() / 8, this._textBubble.width , this._textBubble.height )
    };
};