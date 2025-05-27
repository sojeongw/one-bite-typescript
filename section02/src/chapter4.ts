// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
};

function fuc() {
  // 함수 내에서는 이 타입으로 적용된다
  type User = {};
}

let user: User = { id: 1, name: "이정환", nickname: "winterlood" };

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
};

type CountryNumberCode = {
  [key: string]: number;
  // 꼭 있어야 하는 키가 있다면 추가할 수 있다.
  // 하지만 타입이 일치하거나 호환해야 하므로 오류가 발생한다.
  //   Korea: string;
};

// 위반할 프로퍼티가 없어서 오류가 발생하지 않는다.
let countryNumberCodes: CountryNumberCode = {};
