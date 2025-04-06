const inputData = document.querySelector(".input-data");
const textVal = document.querySelector(".val");
const btn = document.querySelector(".btn-check");

const curDate = new Date();

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const userInputDate = new Date(inputData.value);
  textVal.classList.remove("valg");

  let year = curDate.getFullYear() - userInputDate.getFullYear();
  let month = curDate.getMonth() - userInputDate.getMonth();
  let day = curDate.getDate() - userInputDate.getDate();

  if (day < 0) {
    month -= 1;
    const prevMonth = new Date(curDate.getFullYear(), curDate.getMonth(), 0);
    day += prevMonth.getDate();
  }

  if (month < 0) {
    year -= 1;
    month += 12;
  }

  const spans = textVal.querySelectorAll(".vals");
  spans[0].textContent = year;
  spans[1].textContent = month;
  spans[2].textContent = day;

  // Show the result
  textVal.classList.add("valg");
  textVal.classList.remove("valg");
});
