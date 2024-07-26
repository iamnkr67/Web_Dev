const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  var divElement = document.getElementById("div");
  let arr = ["red", "blue", "green", "yellow"];
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomColor = arr[randomIndex];
  divElement.style.backgroundColor = randomColor;
});

//Progress bar
const progress = document.querySelector(".progress-bar");
const time = document.getElementById("time");

time.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const enteredTime = parseInt(time.value);
    if (!isNaN(enteredTime)) {
      let currentValue = 0;
      const targetValue = enteredTime * 60; // Convert minutes to seconds
      const increment = targetValue / 100; // Divide target value by 100 to get incremental value
      const interval = setInterval(() => {
        currentValue += increment;
        progress.style.width = `${(currentValue / targetValue) * 100}%`;
        console.log(
          currentValue +
          currentValue +
            " " +
            targetValue +
            " \n progress: " +
            (currentValue / targetValue) * 100,
        );
        progress.setAttribute("aria-valuenow", currentValue);
        progress.textContent = `${Math.floor(
          (currentValue / targetValue) * 100,
        )}%`;
        if (currentValue >= targetValue) {
          progress.textContent = `Completed...`;
          clearInterval(interval);
        }
      }, 1000); // Update progress bar every second
    } else {
      alert("Number only!!!");
    }
  }
});
