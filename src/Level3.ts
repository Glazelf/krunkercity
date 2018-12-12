///<reference path="LevelHelper.ts" />
class Level3 extends LevelHelper{
    public drawLevel3(){
        this._canvas.writeImageToCanvas(this._level3background, 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
    };
};