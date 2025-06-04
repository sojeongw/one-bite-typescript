// 인덱스드 액세스 타입
type Post = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

function printAuthorInfo(author: Post[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// Post[0] == Post[number]
const post: Post[number] = {
  title: "제목",
  content: "본문",
  author: {
    id: 1,
    name: "이정환",
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Typ1 = Tup[1];
type TupNum = Tup[number]; //최적의 공통 타입만 추출
