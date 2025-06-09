// Exclude<T, U>
// T에서 U를 제거한다.
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<string | boolean, boolean>;

// Extract
// T에서 U를 추출한다.
type Extract<T, U> = T extends U ? T : never;
type B = Extract<string | boolean, boolean>;

// ReturnType<T>
// 함수의 반환값 타입을 추출한다.
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

type C = ReturnType<typeof funcA>;
