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
        //Button for Level 1 on MenusScreen
        if(event.x > this._canvas.getWidth() / 40 && event.x < this._canvas.getWidth() / 40 + this._startScreen._level1background.width / 2) {
            if(event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level1background.height / 2) {
                //ga naar level 1
                //*debug*
                console.log(event.x);
                console.log(event.y);
                console.log('Level 1 clicked');
            }
        }
        //Button for level 2 on MenuScreen
        if(event.x > this._canvas.getWidth() / 2.9  && event.x < this._canvas.getWidth() / 2.9 + this._startScreen._level1background.width / 2) {
            if(event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level1background.height / 2) {
                //ga naar level 2
                //*debug*
                console.log(event.x);
                console.log(event.y);
                console.log('Level 2 clicked');
            }
        }
        //Button for level 3 on MenuScreen
        if(event.x > this._canvas.getWidth() / 1.5 && event.x < this._canvas.getWidth() / 1.5 + this._startScreen._level1background.width / 2) {
            if(event.y > this._canvas.getHeight() / 3.5 && event.y < this._canvas.getHeight() / 3.5 + this._startScreen._level1background.height / 2) {
                //ga naar level 3
                //*debug*
                console.log(event.x);
                console.log(event.y);
                console.log('Level 3 clicked');
            }
        }
        //Button for HelpScreen on MenuScreen
        if(event.x > this._canvas.getWidth() / 1.05 && event.x < this._canvas.getWidth() / 1.05 + this._startScreen._helpButton.width / 5) {
            if(event.y > this._canvas.getHeight() / 50 && event.y < this._canvas.getHeight() / 50 + this._startScreen._helpButton.height / 5) {
                //ga naar HelpScreen
                //*debug*
                console.log(event.x);
                console.log(event.y);
                console.log('HelpScreen clicked');
            }
        }

        
        //*debug*
        console.log(event.x, this._canvas.getWidth() / 1.05, this._canvas.getWidth() / 1.05 + this._startScreen._level1background.width / 5);
        console.log(event.y, this._canvas.getHeight() / 50, this._canvas.getHeight() / 50 + this._startScreen._level1background.height / 5);
    };
}