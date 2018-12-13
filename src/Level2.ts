///<reference path="LevelHelper.ts" />
class Level2 extends LevelHelper{
    public drawLevel2(){
        this._canvas.writeImageToCanvas(this._level2background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
    };
};