// 타입 단언
type Person = {
  name: string;
  age: number;
};
let person: Person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언의 규칙
// A as B = A가 B의 슈퍼 타입이거나 서브타입이어야 한다.
let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;
let num3 = 10 as unknown as string;

// const 단언
let num4 = 10 as const;

// readonly가 되면서 프로퍼티의 값을 변경할 수 없게 된다.
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// non null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글 1",
  author: "이정환",
};

const len: number = post.author!.length;
