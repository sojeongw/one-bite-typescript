// union: 합집합
let a: string | number;
a = 1;
a = "hello";
let arr: (number | string | boolean)[];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "",
// };

// 2. intersection: 교집합
let variable: number & string;
type Intersection = Dog & Person;
let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
