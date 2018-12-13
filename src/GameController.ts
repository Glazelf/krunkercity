class GameController {
    private readonly _startScreen: Startscreen;
    private readonly _canvas: Canvas;
    private readonly _canvasElement: Canvas;
    public constructor(canvas: Canvas) {
        this._startScreen = new Startscreen(this._canvasElement);
        this._canvas = canvas;
    }

    public clickEventHandler(): void {
        document.addEventListener('click', (event: MouseEvent) => {
            this.onClick(event);
        });
    };

    private onClick(event: any): void {
        if (event.x > this._canvas.getWidth() / 40 && event.x < this._canvas.getWidth() + this._startScreen._level1background.width / 2) {
            if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 - this._startScreen._level1background.height / 2) {
                //ga naar level 1
                console.log(event.x);
                console.log(event.y);
                console.log('Level 1 clicked');
            }
        }
        if (event.x > this._canvas.getWidth() / 2.9 && event.x < this._startScreen._level1background.width / 2) {
            if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 - this._startScreen._level1background.height / 2) {
                //ga naar level 2
                console.log(event.x);
                console.log(event.y);
                console.log('Level 2 clicked');
            }
        }
        if (event.x > this._canvas.getWidth() / 1.5 && event.x < this._startScreen._level1background.width / 2) {
            if (event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 - this._startScreen._level1background.height / 2) {
                //ga naar level 3
                console.log(event.x);
                console.log(event.y);
                console.log('Level 3 clicked');
            }
        }
        console.log(`picture left top: ${this._canvas.getWidth() / 2.9}`);
        console.log(`clicked x: ${event.x}`);
        console.log(`picture right top: ${this._canvas.getWidth() + this._startScreen._level1background.width / 2}`);
        console.log(`picture top border: ${this._canvas.getHeight() / 3.5}`);
        console.log(`clicked y: ${event.y}`);
        console.log(`picture bottom border: ${this._canvas.getHeight()}`);
    };

    //Function to make the levels clickable in the main menu
    public levelClickDetection() {
        // if(this.event.x > this._canvas.getWidth() / 40 && this.event.x < this._startScreen._level1background.width / 2) {
        //     if(this.event.y > this._canvas.getHeight() / 3.5 && this.event.y < this._canvas.getHeight() / 3.5 - this._startScreen._level1background.height / 2) {
        //         //ga naar level 1
        //         console.log(this.event.x);
        //         console.log(this.event.y);
        //         console.log('Level 1 clicked');
        //     }
        // }
        // if(this.event.x > this._canvas.getWidth() / 2.9  && this.event.x < this._startScreen._level1background.width / 2) {
        //     if(this.event.y > this._canvas.getHeight() / 3.5 && this.event.y < this._canvas.getHeight() / 3.5 - this._startScreen._level1background.height / 2) {
        //         //ga naar level 2
        //         console.log(this.event.x);
        //         console.log(this.event.y);
        //         console.log('Level 2 clicked');
        //     }
        // }
        // if(this.event.x > this._canvas.getWidth() / 1.5 && this.event.x < this._startScreen._level1background.width / 2) {
        //     if(this.event.y > this._canvas.getHeight() / 3.5 && this.event.y < this._canvas.getHeight() / 3.5 - this._startScreen._level1background.height / 2) {
        //         //ga naar level 3
        //         console.log(this.event.x);
        //         console.log(this.event.y);
        //         console.log('Level 3 clicked');
        //     }
        // }
        console.log('levelClickDetection is oprating normally');
    }
}