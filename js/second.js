let string1 = "level";
let string2 = "";
for (i = string1.length - 1; i >= 0; i--) {
  string2 += string1[i];
}
console.log(string1 == string2);
