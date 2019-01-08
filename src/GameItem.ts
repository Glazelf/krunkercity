class GameItem {
    private co2: number;
    private energy: number;
    private money: number;
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
