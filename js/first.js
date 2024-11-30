let firststep = "salom dunyo";
let laststep = "";
let secondstep = firststep.split(" ");
for (i = 0; i < secondstep.length; i++) {
  laststep += `${secondstep[i]} `;
}
console.log(laststep);
