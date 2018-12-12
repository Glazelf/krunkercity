///<reference path="LevelHelper.ts" />
class Level3 extends LevelHelper{
    public drawLevel3(){
        this._canvas.writeImageToCanvas("./assets/images/level3.png", 0, 0, this._canvas.getWidth(), this._canvas.getHeight());
    };
};