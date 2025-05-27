// enum
// 값을 할당하지 않아도 자동으로 0부터 시작한다. = 숫자형 이넘

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN,
};

enum Language {
  korean = "ko",
  english = "en",
}
