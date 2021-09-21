let name1: string = "world";
name1 = "hi ho";

//function in TS
const tsFunction = (name: string, surname: string): string => {
  return `${name} ${surname}`;
};

console.log(tsFunction("dwi", "d"));

//object
interface User {
  name: string;
  age: number;
  getMessage(): string;
}
const user1: User = {
  name: "monster",
  age: 2,
  getMessage() {
    return "a";
  },
};

const user2: User = {
  name: "monster2",
  age: 22,
  getMessage() {
    return "a";
  },
};

//union
const union: string | number = "1";

//working with interface
// interface UserInterface {
//     name: string
// }

// let userUnion: UserInterface | null = null

//aliases
type ID = string;
type PopularTag = string;

interface UserInterface {
  name: ID;
}

const popularThing: PopularTag[] = ["something", "B"];
//void
const doSomething = (): void => {
  console.log("doSomething");
};

//DOM
const someElement = document.querySelector(".foo") as HTMLInputElement;
console.log("some element", someElement.value);
//Event Listener
const eventElement = document.querySelector(".fa");
eventElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log("event", target.value);
});

//classes in ts
class UsersNew {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const userCl = new UsersNew("test", "name");
console.log(userCl.getFullName);
