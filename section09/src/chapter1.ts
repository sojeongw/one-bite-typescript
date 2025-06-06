// 조건부 타입
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// 제네릭과 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();

// 분산적인 조건부 타입
// 유니언으로 하면 분산적으로 바뀐다.
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T;
// never가 포함되어 있으면 사라진다.
type C = Exclude<number | string | boolean, string>;

type Extract<T, U> = T extends U ? T : never;
type D = Extract<number | string | boolean, string>;
