class GameController {
    private readonly _startScreen: Startscreen;
    private readonly _canvasElement: Canvas;
    private clickedX: number;
    private clickedY: number;

    public constructor() {
        this._startScreen = new Startscreen(this._canvasElement);
    }

    public clickEventHandler(): void {
        document.addEventListener('click', (event: MouseEvent) => {
            this.onClick(event);
        });
    };

    private onClick(event: any): void {
        let hasClicked = event;
        this.clickedX = event.x;
        this.clickedY = event.y;
        console.log(hasClicked);
    };

    //Function to make the levels clickable in the main menu
    public levelSelect() {
        if(this.clickedX > this._startScreen.xPosLevel1Background && this.clickedX < this._startScreen._level1background.width) {

        }
    }
}