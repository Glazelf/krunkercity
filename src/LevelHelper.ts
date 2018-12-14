class LevelHelper {
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private _canvas: Canvas;
    private co2: number = 50;
    private energy: number = 0;
    private money: number = 100;
    private production: number;
    private _level1background: HTMLImageElement;
    private _level2background: HTMLImageElement;
    private _level3background: HTMLImageElement;
    private _bolt: HTMLImageElement;
    private _pollution: HTMLImageElement;
    private _coins: HTMLImageElement;

    constructor(canvas: Canvas) {
        this._canvas = canvas;
        this._level1background = new Image();
        this._level1background.src = "./assets/images/level1.png";
        this._level2background = new Image();
        this._level2background.src = "./assets/images/level2.png";
        this._level3background = new Image();
        this._level3background.src = "./assets/images/level3.png";
        this._bolt = new Image();
        this._bolt.src = "./assets/images/bolt.png";
        this._pollution = new Image();
        this._pollution.src = "";
        this._coins = new Image();
        this._coins.src = "./assets/images/simmoney.png";
        console.log(canvas);
    }

    public drawLevel1() {
        //background
        this._canvas.writeImageToCanvas(this._level1background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());

        //building spots
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer, this._canvas.getWidth() / 10, this._canvas.getHeight() / 9)
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer, this._canvas.getWidth() / 10, this._canvas.getHeight() / 9)

        //currencies
        this.drawCurrencies()
    };

    public drawLevel2() {
        //background
        this._canvas.writeImageToCanvas(this._level2background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());

        //buildingspots

        //currencies
        this.drawCurrencies()
    };

    public drawLevel3() {
        this._canvas.writeImageToCanvas(this._level3background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());

        //buildingspots

        //currencies
        this.drawCurrencies()
    };

    public drawCurrencies(){
        //energy
        this._canvas.writeImageToCanvas(this._bolt, this._canvas.getWidth()/500, this._canvas.getHeight()/10, this._bolt.width / 8, this._bolt.height / 8);
        this._canvas.writeTextToCanvas(`${this.energy}`, this._canvas.getWidth()/14.5, this._canvas.getHeight()/6.1, 60)

        //co2
        
        
        //money
        this._canvas.writeImageToCanvas(this._coins, this._canvas.getWidth()/500, this._canvas.getHeight()/5.5, this._coins.width/3, this._coins.height/3)
        this._canvas.writeTextToCanvas(`${this.money}`, this._canvas.getWidth()/14.5, this._canvas.getHeight()/4, 60)
    }
};