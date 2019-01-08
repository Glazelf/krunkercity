class GameItem {
    private co2: number = 1;
    private energy: number = 1;
    private money: number = 1;
    private counter: number;

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

    public generateCurrencies(amountPerInterval: number) {
        this.timer();
        let trigger = Math.round(this.counter / 240);
        if(trigger = 1) {
            this.changeMoney(amountPerInterval);
            this.counter -= 240;
        }
    }

    public timer(): void {
        this.counter++;
    }
};
