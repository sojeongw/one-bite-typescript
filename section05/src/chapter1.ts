// 인터페이스 확장
interface Animal {
  name: string;
  age: string;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}
