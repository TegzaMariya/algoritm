let m;
function calculate(m) {
  if (m < 1) {
    console.log("m повинно бути більше або дорівнювати 1!");
    return;
  }

  for (let n = 1; n <= m; n++) {
    let xn = (Math.log(5 * n) + 1) / (2 * n + 3);
    console.log(`${n}. ${xn}`);
  }
}
calculate(7);