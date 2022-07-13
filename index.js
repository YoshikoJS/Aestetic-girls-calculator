let numbers = {};
for (let i = 0; i <= 9; i++) {
  numbers[i] = new Audio(`./sounds/${i}.mp3`);
}
let input = document.querySelector("input");
let btns = document.querySelectorAll(".btn");
for (let btn of btns) {
  btn.onclick = () => {
    if (btn.innerHTML == "C") {
      input.value = "";
    } else if (btn.innerHTML == "=") {
      input.value = eval(input.value);
    } else {
      try {
        numbers[Number(btn.innerHTML)].play();
      } catch (error) {}

      input.value += btn.innerHTML;
    }
  };
}
