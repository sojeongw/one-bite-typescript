// Pick<T, K>
// 객체 타입으로부터 특정 프로퍼티만 골라낸다.
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

// Omit<T, K>
// pick과 반대되는 기능. 특정 프로퍼티를 제거한다.
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailUrl: "",
};

// Record<K, V>
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string }
>;
