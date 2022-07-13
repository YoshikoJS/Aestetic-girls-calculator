let input = document.querySelector("input");
let btns = document.querySelectorAll(".btn");
for (let btn of btns) {
  btn.onclick = () => {
    if (btn.innerHTML == "C") {
      input.value = "";
    } else if (btn.innerHTML == "=") {
      input.value = eval(input.value);
    } else {
      input.value += btn.innerHTML;
    }
  };
}
