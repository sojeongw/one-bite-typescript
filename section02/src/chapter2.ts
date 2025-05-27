// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "winterlood"];
let boolArr: Array<boolean> = [true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플: 길이와 타입이 고정된 배열
// push, pop을 해도 에러가 나오지 않기 때문에 조심해야 한다.
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];
