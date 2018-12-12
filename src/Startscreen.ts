class Startscreen {
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private _canvas: Canvas;
    private levelsUnlocked: number;
    private userName: string;

    constructor(canvas: Canvas){
        this._canvas = canvas;
        //console.log(canvas);
    }

    public draw(){
        this._canvas.writeImageToCanvas("./assets/images/greenenergy.jpg", 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
        
    };
};