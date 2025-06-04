// 프로미스
// 명시하지 않으면 Unknown 타입
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20); // 비동기 작업의 결과값
    reject("실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});

// 실패했을 때의 타입은 정해줄 수 없다.
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

// 프로미스를 반환하는 함수의 타입 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "제목",
        content: "내용",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
