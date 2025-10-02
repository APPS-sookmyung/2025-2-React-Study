/* common js 모듈
const moduleData = require("./math");
console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 1));
*/

// ES 모듈
import {add, sub} from "./math.js";

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

/*console.log(add(1, 2));
console.log(sub(1,2));
*/