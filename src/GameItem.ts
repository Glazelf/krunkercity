class GameItem {
    private _gameController: GameController;
    private co2: number = 1;
    private energy: number = 1;
    private money: number = 1;

    public constructor(co2: number, energy: number, money: number) {
        this.co2 = co2;
        this.energy = energy;
        this.money = money;
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
    }
};
