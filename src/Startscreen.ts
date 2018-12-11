class Startscreen {
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private _canvas: Canvas;
    private levelsUnlocked: number;
    private userName: string;
    private backgroundImage= [
        "../assets/images/greenenergy.jpg"
    ];

    constructor(canvas: Canvas){
        this._canvas = canvas;
        //console.log(canvas);
    }

    public draw(){
        this._canvas.clearScreen();
        this._canvas.writeImageToCanvas("./assets/images/greenenergy.jpg", 10, 10);
    };

};