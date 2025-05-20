let regEx = new RegExp('ab+c');
let array: Array<number> = [1,2,3]
let set: Set<number> = new Set([1,2,3])

class Queueue<T> {
    private dataz: Array<T> = [];
    push(item: T) {
        this.dataz.push(item);
    }
    pop(): T | undefined {
        return this.dataz.shift();
    }
    get length(): number {
        return this.dataz.length;
    }
}