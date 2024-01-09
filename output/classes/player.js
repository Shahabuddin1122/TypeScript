export class Person {
    constructor(n, a, c) {
        this.name = n,
            this.age = a,
            this.country = c;
    }
    play() {
        console.log(`${this.name} play for ${this.country}`);
    }
}
