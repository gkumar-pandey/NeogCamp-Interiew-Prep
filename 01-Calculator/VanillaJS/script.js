const firstInput = document.querySelector(".first-input");
const secondInput = document.querySelector(".second-input");
const btn = document.querySelectorAll(".btn");
const ans = document.querySelector(".result");

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const operator = btn.value;
    const num1 = Number(firstInput.value);
    const num2 = Number(secondInput.value);

    if (operator == "+") {
      ans.innerHTML = `<h4>Ans = ${num1 + num2}</h4>`;
    } else if (operator == "-") {
      ans.innerHTML = `<h4>Ans = ${num1 - num2}</h4>`;
    } else if (operator == "*") {
      ans.innerHTML = `<h4>Ans = ${num1 * num2}</h4>`;
    } else if (operator == "/") {
      ans.innerHTML = `<h4>Ans = ${num1 / num2}</h4>`;
    }
  });
});
