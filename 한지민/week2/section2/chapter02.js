// 단락 평가
// 논리연산식에서 첫 번째 피연산자의 값만으로 해당 연산의 결과를 확정할 수 있다면 두 번째 피연산자의 값은 접근하지 않음
// ex) varA && varB에서 varA가 true이면 varB에 접근 X

/*
function returnFalse() {
    console.log("False 함수")ㅣ
    return undefined;
}

function returnTrue() {
    console.log("True 함수");
    return 10;
}

console.log(returnTrue() || returnFalse());
*/

// 단락 평가 활용 사례

function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환"});
