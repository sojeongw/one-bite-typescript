// 접근 제어자
// public, private, protected
class Employee {
  // 필드
  private name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

const employee = new Employee("이정환", 27, "developer");
// employee.name = "홍길동";
