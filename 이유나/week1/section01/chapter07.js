// 1. 대입 연산자 (변수 이름 = 저장할 값)
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 3.복합 대입 연산자
//산술 연산자 + 대입 연산자
let num7 = 10;
//num7 = num7 + 20;
num7 += 20; //num7에 값에 20을 더 추가하라
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
num8++; //라인이 끝나고 나서 1이 추가 //10
/* console.log(num8); //11 */
//++num : 전위 연산, num++ : 후위 연산, --num, num--

//5. 논리 연산자
let or = true || false; //하나만 참이면 참
let and = true && false; //두개 모두 참이여야 참
let not = !true; //참-> 거짓 , 거짓-> 참
console.log(or, and, not);

//6. 비교 연산자
let comp1 = 1 === 2; //동등
let comp2 = 1 !== 2; //비동등
console.log(comp1, comp2);
// == 두번만 쓰면 자료형까지 같은지 알 수 없다. 값 자체만 알 수 있음

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp3, comp4, comp5, comp6);
