class GameController {
    private readonly _startScreen: Startscreen;
    private readonly _canvas: Canvas;
    private readonly _canvasElement: Canvas;
    private _levelHelper: LevelHelper;
    public currentScreen: string = '';

    public constructor(canvas: Canvas) {
        this._startScreen = new Startscreen(this._canvasElement);
        this._canvas = canvas;
        this._levelHelper = new LevelHelper(this._canvas)
    }

    public clickEventHandler(): void {
        document.addEventListener('click', (event: MouseEvent) => {
            this.onClick(event);
        });
    };

    private onClick(event: any): void {
        if (this.currentScreen == ``) {
            if (event.x > this._canvas.getWidth() / 40 && event.x < this._canvas.getWidth() / 40 + this._startScreen._level1background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level1background.height / 2) {
                    //ga naar level 1
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 1 clicked');
                    this._canvas.clearScreen();
                    this.currentScreen = 'Level1'
                }
            }
        }

        if (this.currentScreen == ``) {
            if (event.x > this._canvas.getWidth() / 2.9 && event.x < this._canvas.getWidth() / 2.9 + this._startScreen._level1background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level1background.height / 2) {
                    //ga naar level 2
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 2 clicked');
                    this._canvas.clearScreen();
                    this.currentScreen = 'Level2';
                }
            }
        }

        if (this.currentScreen == ``) {
            if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._startScreen._level1background.width / 2) {
                if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level1background.height / 2) {
                    //ga naar level 3
                    console.log(event.x);
                    console.log(event.y);
                    console.log('Level 3 clicked');
                    this._canvas.clearScreen();
                    this.currentScreen = 'Level3'
                }
            }
        }

        console.log(event.x, this._canvas.getWidth() / 40, this._canvas.getWidth() + this._startScreen._level1background.width / 2);
        console.log(event.y, this._canvas.getHeight() / 3.5, this._canvas.getHeight() / 3.5 - this._startScreen._level1background.height / 2);
        // console.log(`picture left top: ${this._canvas.getWidth() / 2.9}`);
        // console.log(`clicked x: ${event.x}`);
        // console.log(`picture right top: ${this._canvas.getWidth() + this._startScreen._level1background.width / 2}`);
        // console.log(`picture top border: ${this._canvas.getHeight() / 3.5}`);
        // console.log(`clicked y: ${event.y}`);
        // console.log(`picture bottom border: ${this._canvas.getHeight()}`);
    };
}