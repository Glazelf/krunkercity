class Startscreen {
    private _canvas: Canvas;
    public _backgroundstart: HTMLImageElement;
    public _level1background: HTMLImageElement;
    public _level2background: HTMLImageElement;
    public _level3background: HTMLImageElement;
    public _level2locked: HTMLImageElement;
    public _level3locked: HTMLImageElement;
    public xPosLevel1Background: number;
    public yPosLevel1Background: number;
    public xPosLevel2Background: number;
    public yPosLevel2Background: number;
    public xPosLevel3Background: number;
    public yPosLevel3Background: number;
    public _levelIntro1: HTMLImageElement;
    public _levelIntro2: HTMLImageElement;
    public _levelsUnlocked: number = 1;

    constructor(canvas: Canvas) {
        this._canvas = canvas;
        this._backgroundstart = new Image();
        this._backgroundstart.src = "./assets/images/greenenergy.jpg";
        this._level1background = new Image();
        this._level1background.src = "./assets/images/level1bubble.png";
        this._level2background = new Image();
        this._level2background.src = "./assets/images/level2bubble.png";
        this._level3background = new Image();
        this._level3background.src = "./assets/images/level3bubble.png";
        this._level2locked = new Image();
        this._level2locked.src = "./assets/images/level2locked.png";
        this._level3locked = new Image();
        this._level3locked.src = "./assets/images/level3locked.png";
        this._levelIntro1 = new Image();
        this._levelIntro1.src = "./assets/images/level1_uitleg.png";
        this._levelIntro2 = new Image();
        this._levelIntro2.src = "./assets/images/level2_uitleg.png";
        //console.log(canvas);
    };

    public draw = () => {
        // this._canvas.writeImageToCanvas(this._level1background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
        //background
        this._canvas.writeImageToCanvas(this._backgroundstart, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());

        //title
        document.getElementById("title").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-left:34%;margin-top:-50%;color:black;font-size:96px'>Krunker City</span>`;

        //level1
        this._canvas.writeTextToCanvas("Level 1", this._canvas.getWidth() / 6, this._canvas.getHeight() / 3.6, 40);
        this._canvas.writeImageToCanvas(this._level1background, this._canvas.getWidth() / 40, this._canvas.getHeight() / 3.5, this._level1background.width / 2, this._level1background.height / 2);

        //level2
        this._canvas.writeTextToCanvas("Level 2", this._canvas.getWidth() / 2, this._canvas.getHeight() / 3.6, 40);
        if (this._levelsUnlocked == 2 || this._levelsUnlocked == 3) {
            this._canvas.writeImageToCanvas(this._level2background, this._canvas.getWidth() / 2.9, this._canvas.getHeight() / 3.5, this._level2background.width / 2, this._level2background.height / 2);
        } else if (this._levelsUnlocked == 1) {
            this._canvas.writeImageToCanvas(this._level2locked, this._canvas.getWidth() / 2.9, this._canvas.getHeight() / 3.5, this._level2background.width / 2, this._level2background.height / 2);
        };

        //level3
        this._canvas.writeTextToCanvas("Level 3", this._canvas.getWidth() / 1.23, this._canvas.getHeight() / 3.6, 40);
        if (this._levelsUnlocked == 3) {
            this._canvas.writeImageToCanvas(this._level3background, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 3.5, this._level3background.width / 2, this._level3background.height / 2);
        } else if (this._levelsUnlocked == 1 || this._levelsUnlocked == 2) {
            this._canvas.writeImageToCanvas(this._level3locked, this._canvas.getWidth() / 1.5, this._canvas.getHeight() / 3.5, this._level3background.width / 2, this._level3background.height / 2);
        };

        //helpbutton
        this._canvas.writeTextToCanvas("Help", this._canvas.getWidth() / 1.03, this._canvas.getHeight() / 7);
        this._canvas.writeImageToCanvas(this._canvas._helpButton, this._canvas.getWidth() / 1.05, this._canvas.getHeight() / 50, this._canvas._helpButton.width / 5, this._canvas._helpButton.height / 5);
    };
};