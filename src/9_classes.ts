class Animal {

    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    printDistnaceTravelled(distanceTravelledInMeters: number): void{
        console.log(`$this.name has travelled ${distanceTravelledInMeters}m.`);
    }
}

let dog: Animal = new Animal('dog')
dog.printDistnaceTravelled(1000)
//dog.name = 'dog2' // Error: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    printDistnaceTravelled(distanceTravelledInMeters: number): void{
        console.log(`$this.name has travelled ${distanceTravelledInMeters}m.`);
    }
}