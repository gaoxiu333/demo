interface User {
  id: number;
}

const user: User = {
  id: 1,
};

interface Add {
  (a: number): number;
}
const add: Add = (a) => a;
add(1);

interface Callable {
  (message: string): void;
}

const log: Callable = (msg) => console.log(msg);

log("123");
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {}
}
