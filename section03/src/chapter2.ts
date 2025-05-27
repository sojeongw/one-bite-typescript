// unknown
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
}

// never
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
}

// void
function voidExam() {
  function voidFunc(): void {
    console.log();
  }

  let voidVar: void = undefined;
}

// any
// 계층도를 무시하는 치트키 타입이기 떄문에 웬만하면 사용하지 않는 것이 좋다.
// 단, never로 다운 캐스팅할 수는 없다.
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;
  undefinedVar = anyVar;
}
