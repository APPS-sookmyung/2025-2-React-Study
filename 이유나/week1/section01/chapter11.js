// 함수
// 공통으로 자주 사용되는 유사한 코드들을 묶어 이름을 붙임

/*// 함수 선언 -> 함수를 새롭게 만든다
function greeting() {
  console.log("안녕하세요!");
}

// 함수 호출, 소괄호 필수!
console.log("호출 전");
greeting(); 
console.log("호출 후");
*/

//직사각형 넓이
function getArea(width, height) {
  function another() {
    //중첩 함수
    console.log("another");
  }
  another();
  //함수의 변수 -> 매개변수
  let area = width * height;

  return area; //area -> 반환값
  console.log("hello"); //return 후 함수가 종료되기 때문에 이 줄은 실행되지 않음
}

let area1 = getArea(10, 20); //200을 반환하고 area1에 저장
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(10, 20); //인수, 매개변수에 저장된다

//함수 호출은 함수 선언보다 위에 적어도 호출 가능함
// -> 호이스팅 : 끌어올리다 라는 뜻, 함수를 내부적으로 최상단으로 끌어올려줌
// -> 유연하게 프로그래밍 가능
