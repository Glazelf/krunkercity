class Game {
    private readonly _canvasElement: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    private readonly _canvas: Canvas;

    constructor() {
        this._canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new Canvas(this._canvasElement);

    }

    public draw() {

    }

}

window.addEventListener('load', init);
function init(): void {
    const KrunkerCity = new Game();
    window.setInterval(KrunkerCity.draw, 1000 / 60)
}