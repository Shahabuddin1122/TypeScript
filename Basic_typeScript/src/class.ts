class player {
    private name:string;
    protected age:number;
    public country:string;

    constructor(n:string,a:number,c:string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is playing for ${this.country} since ${2024-this.age}`)
    }
}

const sakib = new player("Sakib",34,"Bangladesh");
const mashrafee = new player("Mahrafee",48,"India");
const Dhoni = new player("Dhoni",40,"India");

const Player:player[] = []
Player.push(sakib);
Player.push(Dhoni);
Player.push(mashrafee);

