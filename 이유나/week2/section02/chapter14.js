// async와 await

// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 프로미스를 반환하지 않는 함수에 붙여서 함수가 프로미스를 반환하도록 변환해주는 그런 키워드
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}

console.log(getData());

// await
// 반드시 async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();
  console.log(data);
} //데이터 함수가 반환하는 프로미스가 종료되길 기다린다.

printData();

// async와 await을 이용하면 비동기 작업을 마치 동기 작업을 처리하듯이 아주 간결한 코드로 수행할 수 있다.
// 비동기 너무 어렵다...
