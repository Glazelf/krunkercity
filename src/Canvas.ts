class Canvas {
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private _levelHelper: LevelHelper;
    public _buildingHammer: HTMLImageElement;

    constructor(canvasID: HTMLCanvasElement) {
        this._canvasElement = canvasID;
        this._ctx = this._canvasElement.getContext('2d');
        this._canvasElement.width = window.innerWidth;
        this._canvasElement.height = window.innerHeight;
        this._buildingHammer = new Image();
        this._buildingHammer.src = "./assets/images/hammer.png";
    };

    public clearScreen(): void {
        // clear the screen
        this._ctx.clearRect(0, 0, this._canvasElement.width, this._canvasElement.height);
    };

    public writeTextToCanvas(
        text: string,
        xCoordinate: number,
        yCoordinate: number,
        fontSize: number = 30,
        color: string = "black",
        alignment: CanvasTextAlign = "center"
    ) {
        this._ctx.font = `${fontSize}px Minecraft`;
        this._ctx.fillStyle = color;
        this._ctx.textAlign = alignment;
        this._ctx.fillText(text, xCoordinate, yCoordinate);
    };

    public writeImageToCanvas(
        element: HTMLImageElement,
        xCoordinate: number,
        yCoordinate: number,
        width: number,
        height: number,
    ) {
        this._ctx.drawImage(element, xCoordinate, yCoordinate, width, height);
    };

    public writeHammerToCanvas( 
        element: HTMLImageElement = this._buildingHammer,
        xCoordinate: number,
        yCoordinate: number,
        width: number = this._buildingHammer.width/7,
        height: number = this._buildingHammer.height/7,
    ) {
        this._ctx.drawImage(element, xCoordinate, yCoordinate, width, height);
    };

    public randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    };

    public getWidth(): number {
        return this._canvasElement.width
    };

    public getHeight(): number {
        return this._canvasElement.height
    };

};