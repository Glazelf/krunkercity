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
    public _buildingHammer: HTMLImageElement;

    constructor(canvas: Canvas) {
        this._canvas = canvas;
        this._level1background = new Image();
        this._level1background.src = "./assets/images/level1.png";
        this._level2background = new Image();
        this._level2background.src = "./assets/images/level2.png";
        this._level3background = new Image();
        this._level3background.src = "./assets/images/level3.png";
        this._buildingHammer = new Image();
        this._buildingHammer.src = "./assets/images/hammer.png";
        console.log(canvas);
    }

    public drawLevel1(){
        this._canvas.writeImageToCanvas(this._level1background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
        this._canvas.writeImageToCanvas(this._buildingHammer, this._canvas.getWidth()/10, this._canvas.getHeight()/2, this._buildingHammer.width/7, this._buildingHammer.height/7);
    };

    public drawLevel2(){
        this._canvas.writeImageToCanvas(this._level2background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
    };

        public drawLevel3(){
        this._canvas.writeImageToCanvas(this._level3background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
    };

    public drawBuildSpots(){
        
    };
};