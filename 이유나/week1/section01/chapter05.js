//자료형은 집합이다.
/*원시 타입 : number, string, boolean, null, undefined
객체 타입 : object, array, function, regexexp*/
//원시 타입 : 기본형 타입

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

/*console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 % num2); //모듈러 연산 */

/*let inf = Infinity;
let minf = -Infinity;
let nan = NaN; //연산이 실패 했을 때 반환
console.log(1 * "hello"); */

//2. string Type
let myName = "이유나"; //따옴표 필수
let myLocation = "목동";
let introduce = myName + myLocation;

let introduceText = `${myName}는 ${myLocation}에 거주합니다`;
//백틱으로 문자열을 만들면 달러 사인과 중괄호를 통해 변수의 값을 동적으로 문자열에 포함 시킬 수 있다.
// -> 템플릿 리터럴 문법 (실무에서 자주 쓰임)
console.log(introduceText);

// 3. Boolean Type (상태)
let isSwitchOn = true;
let isEmpty = false;

//4. Null Type (아무것도 없다)
let empty = null; //어떠한 값도 담겨져 있지 않다.

// 5. undefined Type
let none;
console.log(none);

//undefined : 변수를 선언하고 아무런 값도 할당하지 않았을 때 자동으로 들어가는 값
//null : 개발자들이 명시적으로 변수에 할당해줘야 하는 값
