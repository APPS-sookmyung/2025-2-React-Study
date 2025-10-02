function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

//default 개별 
export default function mutiply(a, b) {
    return a * b;
}

/* common js 모듈
module.exports = {
    add,
    sub,
};*/

// ES 모듈
export {add, sub};