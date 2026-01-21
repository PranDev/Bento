// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

var dtemp = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
var today = new Date(Date.parse(dtemp));
const hour = today.getHours();
const name = CONFIG.name;

const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

// if (hour >= 23 || hour < 5) {
//   document.getElementById('greetings').innerText = gree1 + name;
// } else if (hour >= 6 && hour < 12) {
//   document.getElementById('greetings').innerText = gree2 + name;
// } else if (hour >= 12 && hour < 17) {
//   document.getElementById('greetings').innerText = gree3 + name;
// } else {
//   document.getElementById('greetings').innerText = gree4 + name;
// }

async function getRandomLine(filePath) {
    // Fetch the file
    const response = await fetch(filePath);
    const text = await response.text();

    // Split the text by new lines to get an array of lines
    const lines = text.split('=====');

    // Filter out any empty lines (optional)
    const nonEmptyLines = lines.filter(line => line.trim() !== '');

    // Select a random line
    const randomLine = nonEmptyLines[Math.floor(Math.random() * nonEmptyLines.length)];

    return randomLine;
}

 getRandomLine('lines.txt').then(randomLine => {
  document.getElementById('greetings').innerText = randomLine;
});
