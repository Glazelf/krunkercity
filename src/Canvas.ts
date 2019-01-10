class Canvas {
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    public _buildingHammer1: HTMLImageElement;
    public _buildingHammer2: HTMLImageElement;
    public _buildingHammer3: HTMLImageElement;
    public _buildingHammer4: HTMLImageElement;
    public _buildingHammer5: HTMLImageElement;
    public _buildingHammer6: HTMLImageElement;
    public _buildingHammer7: HTMLImageElement;
    public _buildingHammer8: HTMLImageElement;
    public _buildingHammer9: HTMLImageElement;
    public _buildingHammer10: HTMLImageElement;
    public _buildingHammer11: HTMLImageElement;
    public _buildingHammer12: HTMLImageElement;
    public _buildingHammer13: HTMLImageElement;
    public _buildingHammer14: HTMLImageElement;
    public _buildingHammer15: HTMLImageElement;
    public _helpButton: HTMLImageElement;
    public _menuKnop: HTMLImageElement;
    public _nextButton: HTMLImageElement;
    public _infoButton: HTMLImageElement;

    constructor(canvasID: HTMLCanvasElement) {
        this._canvasElement = canvasID;
        this._ctx = this._canvasElement.getContext('2d');
        this._canvasElement.width = window.innerWidth;
        this._canvasElement.height = window.innerHeight;
        this._buildingHammer1 = new Image();
        this._buildingHammer1.src = "./assets/images/hammer.png";
        this._buildingHammer2 = new Image();
        this._buildingHammer2.src = "./assets/images/hammer.png";
        this._buildingHammer3 = new Image();
        this._buildingHammer3.src = "./assets/images/hammer.png";
        this._buildingHammer4 = new Image();
        this._buildingHammer4.src = "./assets/images/hammer.png";
        this._buildingHammer5 = new Image();
        this._buildingHammer5.src = "./assets/images/hammer.png";
        this._buildingHammer6 = new Image();
        this._buildingHammer6.src = "./assets/images/hammer.png";
        this._buildingHammer7 = new Image();
        this._buildingHammer7.src = "./assets/images/hammer.png";
        this._buildingHammer8 = new Image();
        this._buildingHammer8.src = "./assets/images/hammer.png";
        this._buildingHammer9 = new Image();
        this._buildingHammer9.src = "./assets/images/hammer.png";
        this._buildingHammer10 = new Image();
        this._buildingHammer10.src = "./assets/images/hammer.png";
        this._buildingHammer11 = new Image();
        this._buildingHammer11.src = "./assets/images/hammer.png";
        this._buildingHammer12 = new Image();
        this._buildingHammer12.src = "./assets/images/hammer.png";
        this._buildingHammer13 = new Image();
        this._buildingHammer13.src = "./assets/images/hammer.png";
        this._buildingHammer14 = new Image();
        this._buildingHammer14.src = "./assets/images/hammer.png";
        this._buildingHammer15 = new Image();
        this._buildingHammer15.src = "./assets/images/hammer.png";
        this._helpButton = new Image();
        this._helpButton.src = "./assets/images/questionmark.png";
        this._menuKnop = new Image();
        this._menuKnop.src = "./assets/images/menu_knop.png";
        this._nextButton = new Image();
        this._nextButton.src = "./assets/images/next_button.png";
        this._infoButton = new Image();
        this._infoButton.src = "./assets/images/info_knop.png";
    };

    //clearing the screen
    public clearScreen(): void {
        // clear the screen
        this._ctx.clearRect(0, 0, this._canvasElement.width, this._canvasElement.height);
    }

    //drawing text
    public writeTextToCanvas(
        text: string,
        xCoordinate: number,
        yCoordinate: number,
        fontSize: number = 30,
        color: string = "black",
        alignment: CanvasTextAlign = "center"
    ) {
        this._ctx.font = `${fontSize}px Helvetica`;
        this._ctx.fillStyle = color;
        this._ctx.textAlign = alignment;
        this._ctx.fillText(text, xCoordinate, yCoordinate);
    }

    //drawing images
    public writeImageToCanvas(
        element: HTMLImageElement,
        xCoordinate: number,
        yCoordinate: number,
        width: number,
        height: number,
    ) {
        this._ctx.drawImage(element, xCoordinate, yCoordinate, width, height);
    }

    //drawing hammers faster
    public writeHammerToCanvas(
        element: HTMLImageElement = this._buildingHammer1,
        xCoordinate: number,
        yCoordinate: number,
        width: number = this._buildingHammer1.width / 7,
        height: number = this._buildingHammer1.height / 7,
    ) {
        this._ctx.drawImage(element, xCoordinate, yCoordinate, width, height);
    }

    //rng
    public randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }

    //canvas width const
    public getWidth(): number {
        return this._canvasElement.width
    }

    //canvas height const
    public getHeight(): number {
        return this._canvasElement.height
    }
}