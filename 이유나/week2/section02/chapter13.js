// promise란?
// 지동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// promise는 비동기 작업을 감싸는 객체이다.
// promise의 효능: 비동기 작업 실행, 비동기 작업 상태 관리 등 ...

// promise의 3가지 상태
// 대기 pending: 비동기 상태 진행중, 영상 로딩
// 성공 fulfilles : 비동기 작업이 성공적으로 마무리 된 상태, 시청 가능 상태
// 실패 rejected : 비동기 작업이 실패한 상태, 시청 불가능 상태
// 해결 resolve : 작업이 대기 상태에서 성공적으로 완료, 영상 로딩 완료
// 거부 reject : 작업이 대기에서 실패, 영상 로딩 실패

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업을 실행하는 함수
    //executor
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  return newP;
}).then((result) => {
  console.log(result);
});
// 너무 어렵다......

const promise = new Promise((resolve, reject) => {
  //비동기 작업을 실행하는 함수
  //executor

  setTimeout(() => {
    const num = null;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
});

// then 메서드
// -> 그 후에, promise의 비동기 작업이 성공했을 때만 호출
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    //연달아 사용 가능, promise chaining
    console.log(error);
  });

// promise가 실패 했을 때 콜백함수를 실행
promise.catch((error) => {
  console.log(error);
});
