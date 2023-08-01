const API_CD_URL =
  "https://api-dev.nimvio.com/cda/rest/v1/Project_1bf5d9a0-cf43-4cf3-b164-9fa7b93dccba/contents";

// Fetch json data from Nimvio API CD and return it
async function fetchJSONData() {
  const response = await fetch(API_CD_URL);
  const jsonData = await response.json();

  return jsonData;
}

// Processes the retrieved data and displays it on the page.
function processData(response) {
  const { Data } = response.data[0];
  const bodyText = Data.bodyText;
  const headline = Data.headline;

  const picture = Data.mediaUrl.MediaUrl;
  document.getElementById("banner").src = picture;
  document.getElementById("bodyText").innerHTML = bodyText;
  document.getElementById("headline").append(headline);
}

// Render function
async function render() {
  const data = await fetchJSONData();
  processData(data);
}

render();

const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
