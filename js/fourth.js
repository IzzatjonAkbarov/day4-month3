const { string } = require("postcss-selector-parser");

let str1 = "abc";
let str2 = "";
for (i = 0; i < str1.length; i++) {
  str2 += String.fromCharCode(str1[i].charCodeAt() + 1);
}
console.log(str2);
// algorithmga tushunmadim
