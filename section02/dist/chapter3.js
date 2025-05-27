// 객체 리터럴 타입
let user = {
    id: 1,
    name: "이정환",
};
let dog = {
    name: "돌돌이",
    color: "brown",
};
// = 구조적 타입 시스템, 프로퍼티 기반 타입 시스템
// <> 명목적 타입 시스템(java 등 이름으로 타입을 정의하는)
user = {
    name: "홍길동",
};
let config = {
    apiKey: "myapi key",
};
export {};
// config.apiKey = "hacked";
