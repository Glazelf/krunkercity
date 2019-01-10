class Helpscreen {
    private _canvas: Canvas;
    public _backgroundhelp: HTMLImageElement;
    public _munten: HTMLImageElement;
    public _energiePunten: HTMLImageElement;
    public _groeneEnergie: HTMLImageElement;
    public _co2: HTMLImageElement;
    public _windMolen: HTMLImageElement;
    public _zonnePanelen: HTMLImageElement;
    public _stuwDam: HTMLImageElement;
    public _aardWarmte: HTMLImageElement;
    public _kernCentrale: HTMLImageElement;
    public _kolenCentrale: HTMLImageElement;
    public _menuKnop: HTMLImageElement;

    constructor(canvas: Canvas) {
        this._canvas = canvas;
        this._backgroundhelp = new Image();
        this._backgroundhelp.src = "./assets/images/greenenergy.jpg";
        this._munten = new Image();
        this._munten.src = "./assets/images/munten_uitleg.png";
        this._energiePunten = new Image();
        this._energiePunten.src = "./assets/images/energie_uitleg.png";
        this._groeneEnergie = new Image();
        this._groeneEnergie.src = "./assets/images/groen_uitleg.png";
        this._co2 = new Image();
        this._co2.src = "./assets/images/co2_uitleg.png";
        this._windMolen = new Image();
        this._windMolen.src = "./assets/images/windmolen_uitleg.png";
        this._zonnePanelen = new Image();
        this._zonnePanelen.src = "./assets/images/zonnepaneel_uitleg.png";
        this._stuwDam = new Image();
        this._stuwDam.src = "./assets/images/stuwdam_uitleg.png";
        this._aardWarmte = new Image();
        this._aardWarmte.src = "./assets/images/aardwarmte_uitleg.png";
        this._kernCentrale = new Image();
        this._kernCentrale.src = "./assets/images/kerncentrale_uitleg.png";
        this._kolenCentrale = new Image();
        this._kolenCentrale.src = "./assets/images/kolencentrale_uitleg.png";
        this._menuKnop = new Image();
        this._menuKnop.src = "./assets/images/menu_knop.png";
    };

    public drawHelp() {
        //background image
        this._canvas.writeImageToCanvas(this._backgroundhelp, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());

        //Coins image
        this._canvas.writeImageToCanvas(this._munten, this._canvas.getWidth() / 32, this._canvas.getHeight() / 64,
            this._munten.width / 3.2, this._munten.height / 3.2);

        //Energie image
        this._canvas.writeImageToCanvas(this._energiePunten, this._canvas.getWidth() / 2.87, this._canvas.getHeight() / 64,
            this._energiePunten.width / 3.2, this._energiePunten.height / 3.2);

        //Groene energie image
        this._canvas.writeImageToCanvas(this._groeneEnergie, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 64,
            this._groeneEnergie.width / 3.2, this._groeneEnergie.height / 3.2);

        //co2 image
        this._canvas.writeImageToCanvas(this._co2, this._canvas.getWidth() / 32, this._canvas.getHeight() / 4,
            this._co2.width / 3.2, this._co2.height / 3.2);

        //Windmolen image
        this._canvas.writeImageToCanvas(this._windMolen, this._canvas.getWidth() / 2.87, this._canvas.getHeight() / 4,
            this._windMolen.width / 3.2, this._windMolen.height / 3.2);

        //Zonnnepanelen image
        this._canvas.writeImageToCanvas(this._zonnePanelen, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 4,
            this._zonnePanelen.width / 3.2, this._zonnePanelen.height / 3.2);

        //Stuwdam image
        this._canvas.writeImageToCanvas(this._stuwDam, this._canvas.getWidth() / 32, this._canvas.getHeight() / 2.07,
            this._stuwDam.width / 3.2, this._stuwDam.height / 3.2);

        //Aardwarmte image
        this._canvas.writeImageToCanvas(this._aardWarmte, this._canvas.getWidth() / 2.87, this._canvas.getHeight() / 2.07,
            this._aardWarmte.width / 3.2, this._aardWarmte.height / 3.2);

        //Kerncentrale image
        this._canvas.writeImageToCanvas(this._kernCentrale, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 2.07,
            this._kernCentrale.width / 3.2, this._kernCentrale.height / 3.2);

        //Kolencentrale image
        this._canvas.writeImageToCanvas(this._kolenCentrale, this._canvas.getWidth() / 2.87, this._canvas.getHeight() / 1.4,
            this._kolenCentrale.width / 3.2, this._kolenCentrale.height / 3.2);

        //menuKnop image
        this._canvas.writeImageToCanvas(this._menuKnop, this._canvas.getWidth() / 7.5, this._canvas.getHeight() / 1.3,
            this._menuKnop.width / 3.2, this._menuKnop.height / 3.2);
    };
};