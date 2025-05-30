// 함수 타입 호환성
// 반환 값의 타입이 호환되는가
// 매개변수의 타입이 호환되는가

type A = () => number;
type B = () => 10;
let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;

// 매개 변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: number) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 매개 변수의 개수가 다를 때
