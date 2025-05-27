// any
// 특정 변수의 타입을 확실히 모를 때 사용
let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
// 다른 변수에 애니 타입을 넣을 수도 있다.
num = anyVar;

// unknown
// 객체든 뭐든 다 넣을 수 있다.
// 하지만 any처럼 반대로는 안된다.
let unknownVar: unknown;
