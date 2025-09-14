/* 형 변환이란? (Type Casting)
어떤 값의 타입을 다른 타입으로 변경하는 것을 말함
number Type 10 -> string Type "10" 
묵시적 형변환 : 개발자가 직접 설정하지 않아도 알아서 js 엔진이 형 변환 하는 것
명시적 형변환 : 개발자가 직접 함수 등을 이용해 변환 */

// 1. 묵시적 형 변환
let num = 10;
let str = "20";

const result = num + str;
/* console.log(result); //num이 덧셈하는 과정에서 string 타입으로 변환
//js 엔진이 오류를 발생시키지 않기 위해 자동으로 형 변환 */

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열을 숫자로
let str1 = "10";
let strToNum1 = Number(str1); //Number라는 내장함수로 형변환

let str2 = "10개";
let strToNum2 = parseInt(str2);
// parseInt : 숫자 값이 아닌 문자를 포함해도 숫자 값으로 변환
console.log(strToNum2);

//숫자 -> 문자열
let num1 = 20;
let numTostr1 = String(num1);

console.log(numTostr1 + "입니다");
