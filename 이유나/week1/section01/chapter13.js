// 1. 콜백 함수
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미 함

function main(value) {
  //   console.log(1);
  //   console.log(2);
  value();
}

main(() => {
  //함수표현식
  //   console.log("i am sub");
});

//2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});

//콜백 함수를 이용하면 중복 코드를 발생시키지 않으면서 크게 개선할 수 있다
//콜백 함수 중요......
