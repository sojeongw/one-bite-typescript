// 인터페이스와 클래스

// 인터페이스는 무조건 public 필드로 정의해야 한다.
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string // private 필드가 필요할 때는 이렇게 사용
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
