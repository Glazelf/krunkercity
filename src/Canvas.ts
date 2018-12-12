class Canvas {
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;

    constructor(canvasID: HTMLCanvasElement) {
        this._canvasElement = canvasID;
        this._ctx = this._canvasElement.getContext('2d');
        this._canvasElement.width = window.innerWidth;
        this._canvasElement.height = window.innerHeight;
    };

    public clearScreen(): void{
        // clear the screen
        this._ctx.clearRect(0, 0, this._canvasElement.width, this._canvasElement.height);
    };

    public writeTextToCanvas(
        text: string,
        fontSize: number,
        xCoordinate: number,
        yCoordinate: number,
        color: string = "white",
        alignment: CanvasTextAlign = "center"
    ) {
        this._ctx.font = `${fontSize}px Comic Sans`;
        this._ctx.fillStyle = color;
        this._ctx.textAlign = alignment;
        this._ctx.fillText(text, xCoordinate, yCoordinate);
    };

    public writeImageToCanvas(
        src: string,
        xCoordinate: number,
        yCoordinate: number,
        width: number,
        height: number
    ) {
        let element = document.createElement("img");
        element.src = src;
        element.addEventListener("load", () => {
            this._ctx.drawImage(element, xCoordinate, yCoordinate, width, height);
        });
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

    public clickEventHandler(): void {
        document.addEventListener('click', (event: MouseEvent) => {
            this.onClick(event);
        });
    };

    private onClick(event: any): void {
        let hasClicked = event;
        let clickedX = event.x;
        let clickedY = event.y;
        console.log(hasClicked);
    };
};