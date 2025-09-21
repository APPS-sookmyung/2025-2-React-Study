// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});
console.log(tennisPeople);
// 특정 조건 검색이나 카테고리별 필터에 필수적으로 사용되는 기능

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name); //순회하면서 names에 저장
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드 (원본 배열을 정렬)
let arr3 = ["b", "a", "c"];
// 배열이 문자열이 아닌 숫자값으로 이루어진다면 sort 메서드가 정상적으로 작동하지 않는다.
// sort 메서드는 사전순이기 때문에 숫자 대소 비교는 불가능
arr3.sort((a, b) => {
  //숫자 대소 비교를 하려면
  if (a > b) {
    //b가 a 앞에 와라
    return 1; // -> b, a배치
  } else if (a < b) {
    //a가 b 앞에 와하
    return -1; //-> a, b 배치
  } else {
    //두 값의 자리를 바꾸지 마라
    return 0; //a, b 자리를 그대로 유지
  }
});
// 정렬 설정과정이 어려움 (강의 목록에 있는 아티클 참고)

console.log(arr3);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 !새로운! 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);
// 5. join
//  배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "yuna"];
const joined = arr6.join("-"); //인수에 구분자 넣을 수 있음
console.log(joined);
