class GameItem {
    private _gameController: GameController;
    private co2: number = 1;
    private energy: number = 1;
    private money: number = 1;
    private counter: number = 0;
    public buildings: number = 0

    public constructor(co2: number, energy: number, money: number) {
        this.co2 = co2;
        this.energy = energy;
        this.money = money;
        this.counter = 0;
    };

    public getCo2(): number {
        return this.co2;
    };

    public getEnergy(): number {
        return this.energy;
    };

    public getMoney(): number {
        return this.money;
    };

    public changeMoney(amount: number): void {
        this.money += amount;
    };

    public changeEnergy(amount: number): void {
        this.energy += amount;

    }

    public changeCo2(amount: number): void {
        this.co2 += amount;

    }

    public generateCurrencies() {
        this.timer();
        if (this.counter=240){
            this.counter = 0
            this.buildings++
        };
        this._gameController.money + this.buildings * 0.2;
    };

    public timer(): void {
        this.counter++;
    };
};
