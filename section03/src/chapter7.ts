// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 상황에 따라 타입을 좁히는 방법
type Person = {
  name: string;
  age: number;
};
function func(value: number | string | Date | Person) {
  // 타입 가드
  if (typeof value === "number") {
    value.toFixed();
  } else if (typeof value === "string") {
    value.toUpperCase();
  } else if (value instanceof Date) {
    value.getTime();
  } else if (value && "age" in value) {
    value.name;
  }
}
