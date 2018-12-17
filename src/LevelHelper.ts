class LevelHelper {
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private _canvas: Canvas;
    public co2: number = 50;
    public energy: number = 0;
    public money: number = 100;
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
        this._pollution.src = "./assets/images/co2.png";
        this._coins = new Image();
        this._coins.src = "./assets/images/simmoney.png";
        console.log(canvas);
    }

    public drawLevel1 = () => {
        //background
        this._canvas.writeImageToCanvas(this._level1background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());

        //building spots
        //trainstation
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer1, this._canvas.getWidth() / 6.5, this._canvas.getHeight() / 3);
        //leftroad
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer2, this._canvas.getWidth() / 9, this._canvas.getHeight() / 1.75);
        //largeforest
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer3, this._canvas.getWidth() / 2.5, this._canvas.getHeight() / 3.5);
        //bottomright from last one
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer4, this._canvas.getWidth() / 1.9, this._canvas.getHeight() / 2.5),
        //bottomright from last one
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer5, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 1.9);
        //mountainrange
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer6, this._canvas.getWidth() / 1.32, this._canvas.getHeight() / 6.5);

        //currencies
        this.co2 = 30;
        this.energy = 20;
        this.money = 90;
        this.drawCurrencies();
    };

    public drawLevel2() {
        //background
        this._canvas.writeImageToCanvas(this._level2background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());

        //buildingspots
        //trainstation
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer1, this._canvas.getWidth() / 6.5, this._canvas.getHeight() / 3);
        //leftroad
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer2, this._canvas.getWidth() / 9, this._canvas.getHeight() / 1.75);
        //bottomrightcity
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer3, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 1.9);
        //park
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer4, this._canvas.getWidth() / 2.44, this._canvas.getHeight() / 3.9);
        //kanaal

        //currencies
        this.co2 = 40;
        this.energy = 10;
        this.money = 80;
        this.drawCurrencies();
    };

    public drawLevel3() {
        //background
        this._canvas.writeImageToCanvas(this._level3background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());

        //buildingspots
        //park
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer1, this._canvas.getWidth() / 2.44, this._canvas.getHeight() / 3.9);
        //rightroad
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer2, this._canvas.getWidth() / 1.2, this._canvas.getHeight() / 1.8);
        //mountainrange
        this._canvas.writeHammerToCanvas(this._canvas._buildingHammer3, this._canvas.getWidth() / 1.32, this._canvas.getHeight() / 6.5);
        //kanaal

        //currencies
        this.co2 = 50;
        this.energy = 0;
        this.money = 70;
        this.drawCurrencies();
    };

    public drawCurrencies() {
        //energy
        this._canvas.writeImageToCanvas(this._bolt, this._canvas.getWidth() / 500, this._canvas.getHeight() / 10, this._bolt.width / 8, this._bolt.height / 8);
        this._canvas.writeTextToCanvas(`${this.energy}`, this._canvas.getWidth() / 14.5, this._canvas.getHeight() / 6.1, 60);

        //co2
        this._canvas.writeImageToCanvas(this._pollution, this._canvas.getWidth() / 500, this._canvas.getHeight() / 60, this._pollution.width / 11, this._pollution.height / 11);
        this._canvas.writeTextToCanvas(`${this.co2}%`, this._canvas.getWidth() / 11.5, this._canvas.getHeight() / 13, 60)

        //money
        this._canvas.writeImageToCanvas(this._coins, this._canvas.getWidth() / 500, this._canvas.getHeight() / 5.5, this._coins.width / 3, this._coins.height / 3);
        this._canvas.writeTextToCanvas(`${this.money}`, this._canvas.getWidth() / 14.5, this._canvas.getHeight() / 4, 60);
    };
};