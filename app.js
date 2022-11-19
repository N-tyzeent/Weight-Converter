let form = document.querySelector("form");
let input = document.querySelector("input");
let res = document.querySelector("span");
let poundsToKG;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value <= 0 || isNaN(input.value)) {
    res.classList.add("error");
    res.textContent = "Please enter a value number!";
    setTimeout(function () {
      res.textContent = "";

      results.classList.remove("error");
    }, 2000);
    input.value = "";
  } else {
    poundsToKG = Number(input.value) / 2.2;
    res.classList.add("no-error");
    res.textContent = `${poundsToKG.toFixed(2)}`;
    setTimeout(function () {
      res.textContent = "";
      input.value = "";
      res.classList.remove("no-error");
    }, 10000);
  }
});
