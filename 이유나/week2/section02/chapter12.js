// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b; //3
//     callback(sum);
//   }, 3000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezdFood = `냉동된 ${food}`;
    callback(freezeFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
// 3초동안 음식이 나오고 2초동안 음식을 식히는 것
// 비동기 작업의 결과를 콜백 함수로 응용하는 방법
// 이러한 방식으로 코드를 작성하면 안좋음, 콜백함수 안에서 콜백함수 호출(콜백지옥)
// -> 비동기 작업을 도와주는 객체를 이용하면 됨 (promise)
