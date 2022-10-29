let round1 = document.querySelector(".round1");
let round2 = document.querySelector(".round2");
let count1 = 1;
let count2 = 1;

function move1() {
  if (count1 % 2 === 0) {
    round1.style.transform = "translate(97px)";
    round1.style.backgroundColor = "rgb(33, 226, 33)";
  }
  if (count1 % 2 === 1) {
    round1.style.transform = "translate(0px)";
    round1.style.backgroundColor = "red";
  }

  count1 += 1;
}

function move2() {
  if (count2 % 2 === 0) {
    round2.style.transform = "translate(105px)";
    round2.style.backgroundColor = "rgb(33, 226, 33)";
  }
  if (count2 % 2 === 1) {
    round2.style.transform = "translate(-10px)";
    round2.style.backgroundColor = "red";
  }

  count2 += 1;
}
