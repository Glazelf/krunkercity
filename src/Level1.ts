///<reference path="LevelHelper.ts" />
class Level1 extends LevelHelper{
    public drawLevel1(){
        this._canvas.writeImageToCanvas(this._level1background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
    };
};