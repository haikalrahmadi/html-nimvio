
const API_CD_URL =
  "https://api-dev.nimvio.com/cda/rest/v1/Project_1bf5d9a0-cf43-4cf3-b164-9fa7b93dccba/contents";

// Fetch json data from Nimvio API CD and return it
async function fetchJSONData() {
  const response = await fetch(API_CD_URL);
  const jsonData = await response.json();

  return jsonData;
}

function getPathUrl(parameter) {
  let currentUrl = window.location.href;
  return currentUrl.endsWith(parameter);
}
// Processes the retrieved data and displays it on the page.
function processData(response, i) {
  const { Data } = response.data[i];
  const bodyText = Data.bodyText;
  const headline = Data.headline;
  if (i === 0 || i === 1) {
    const picture = Data.mediaUrl.MediaUrl;
    document.getElementById("banner").src = picture;
    document.getElementById("bodyText").innerHTML = bodyText;
    document.getElementById("headline").append(headline);
  } else if (i === 2) {
    document.getElementById("bodyCHild").innerHTML = bodyText;
    document.getElementById("headlineChild").append(headline);
  }
}

// Render function
async function render(index) {
  const data = await fetchJSONData();
  processData(data, index);
}

// Call render function
if (getPathUrl("about.html") || getPathUrl("about")) {
  render(1);
}
if (getPathUrl("index.html") || getPathUrl("/")) {
  render(0);
  // render(2);
}




