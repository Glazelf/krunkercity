class GameItem {
    public co2: number;
    public energy: number;
    public money: number;

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
}