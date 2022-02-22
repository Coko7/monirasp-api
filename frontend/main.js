let interval;
let intervalTime;

let p_pi_temp;
let p_error;
let span_pi_time;

document.addEventListener("DOMContentLoaded", () => {
  clearInterval(interval);
  clearInterval(intervalTime);

  p_pi_temp = document.getElementById("pi-temperature");
  p_error = document.getElementById("error");
  span_pi_time = document.getElementById("pi-timestamp");

  getData();
  span_pi_time.innerHTML = formatTime(new Date());

  // Fetch data from the API every 10 seconds
  interval = setInterval(() => {
    getData();
  }, 10000);

  // Update the clock every 200ms
  intervalTime = setInterval(() => {
    span_pi_time.innerHTML = formatTime(new Date());
  }, 200);
});

function getData() {
  axios
    .get("http://192.168.1.48:3000/temperature")
    .then((res) => {
      p_error.style.display = "none";
      const temp = res.data.temperature;
      p_pi_temp.innerHTML = parseFloat(temp).toFixed(1);
      setTemperatureColor(temp);
    })
    .catch((err) => {
      console.error(err);
      p_error.style.display = "block";
      p_pi_temp.innerHTML = "> 9000";
      p_pi_temp.classList = "burning";
    });
}

function setTemperatureColor(temperature) {
  if (temperature < 30) {
    p_pi_temp.classList = "cool";
  } else if (temp < 40) {
    p_pi_temp.classList = "normal";
  } else if (temp < 50) {
    p_pi_temp.classList = "moderate";
  } else {
    p_pi_temp.classList = "hot";
  }
}

function formatTime(date) {
  const hours = `${date.getHours() < 10 ? "0" : ""}${date.getHours()}`;
  const minutes = `${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
  const seconds = `${date.getSeconds() < 10 ? "0" : ""}${date.getSeconds()}`;

  return `${hours}:${minutes}:${seconds}`;
}
