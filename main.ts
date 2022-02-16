class Stringer {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }
    toString() {
        return this.value
    }
}

console.log(new Stringer('hello').toString());

