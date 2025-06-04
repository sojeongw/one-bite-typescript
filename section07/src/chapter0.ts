// 제네릭

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

// 함수를 호출할 떄 타입이 결정된다.
let num = func(10);
let bool = func(true);
let str = func("string");
// 특정 타입으로 할당하고 싶을 때 선언
let arr = func<[number, number, number]>([1, 2, 3]);
