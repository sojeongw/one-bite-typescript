// Partial<T>
// 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔준다.
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

// 직접 구현하는 법
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "나중에 짓자",
  content: "초안",
};

// Required<T>
// Partial과는 반대로 모든 프로퍼티를 필수로 바꾼다.
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "한입",
  tags: ["ts"],
  content: "내용",
  thumbnailUrl: "http...",
};

// Readonly<T>
// 특정 객체의 타입에서 모든 프로퍼티를 읽기 전용으로 만든다.
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글",
  tags: [],
  content: "",
};
