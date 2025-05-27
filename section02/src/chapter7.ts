// void
function fuc1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// never
// 애초에 반환을 할 수 없고 절대 불가능 할 때
function func3(): never {
  while (true) {}
}
