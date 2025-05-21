class Queue<T> {
    data: T[] = []
    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift()
    }
}

const queue = new Queue<number>();
queue.push(1);
queue.push(2);

queue.pop();