class GameItem {
    private co2: number = 1;
    private energy: number = 1;
    private money: number = 1;

    public constructor(co2: number, energy: number, money: number) {
        this.co2 = co2;
        this.energy = energy;
        this.money = money;
    }

    public getCo2(): number {
        return this.co2;
    }

    public getEnergy(): number {
        return this.energy;
    }

    public getMoney(): number {
        return this.money;
    }

    public setCo2(amount: number): number {
        this.co2 = amount;
        return this.co2;
    }

    public setEnergy(amount: number): number {
        this.energy = amount;
        return this.energy;
    }

    public setMoney(amount: number): number {
        this.money = amount;
        return this.money;
    }

    public changeMoney(amount: number): void {
        this.money += amount;
    }

    public changeEnergy(amount: number): void {
        this.energy += amount;
    }

    public changeCo2(amount: number): void {
        this.co2 += amount;
    }
}
