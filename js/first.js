let firststep = "salom dunyo";
let laststep = "";
let secondstep = firststep.split(" ");
for (i = secondstep.length - 1; i >= 0; i--) {
  laststep += +" " + secondstep[i];
}
console.log(laststep);
