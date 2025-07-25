const tempDisplay = document.querySelector("h1");
const addressDisplay = document.querySelector("h2");
const feelsLikeTempDisplay = document.querySelector("h3");

async function getData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=SLSXZMM5UPFYXHENTFNFHRJWG`,
      { mode: "cors" }
    );
    return await response.json();
    console.log(data);
  } catch (error) {
    alert(error);
  }
}
const body = document.querySelector("body");
function displayData(data) {
  tempDisplay.textContent = ` Temp: ${data.currentConditions.temp}°F `;
  addressDisplay.textContent = data.resolvedAddress;
  feelsLikeTempDisplay.textContent = `Feels like: ${data.currentConditions.feelslike}°F `;
  if (data.currentConditions.temp >= 77) {
    body.style.backgroundImage =
      'url("./background-images/windows-11-landscape-scenery-sunrise-stock-day-light-3840x2160-5661.jpg")';
    return;
  }
  if (data.currentConditions.temp >= 59) {
    body.style.backgroundImage =
      'url("./background-images/upa-river-tula-region-russia-sunset-orange-clear-sky-green-3840x2160-3736.jpg")';
    return;
  } else {
    body.style.backgroundImage =
      'url("./background-images/winter-mountains-landscape-lake-cold-snow-covered-scenery-3840x2160-4894.jpg")';
  }
}

const searchButton = document.querySelector("button");
searchButton.addEventListener("click", async () => {
  const input = document.querySelector("input");
  const locationValue = input.value;
  const data = await getData(locationValue);
  displayData(data);
});
window.addEventListener("load", async () => {
  const data = await getData("edmonton");
  displayData(data);
});
