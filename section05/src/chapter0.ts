// 인터페이스
interface Person {
  name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "이정환",
  //   age: 27,
  sayHi: function () {
    console.log("Hi");
  },
};
