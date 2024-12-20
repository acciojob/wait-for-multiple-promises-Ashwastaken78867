const output = document.getElementById("output");

// Function to show the "Loading..." row
function showLoadingRow() {
  const loadingRow = document.createElement("tr");
  loadingRow.setAttribute("id", "loading"); // Add id="loading"
  loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
  output.appendChild(loadingRow); // Append to the output container
}

// Function to create a promise with a random delay
function createPromise(promiseName) {
  return new Promise((resolve) => {
    const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1s and 3s
    setTimeout(() => {
      resolve({ promiseName, time: parseFloat(time) }); // Resolve after the delay
    }, time * 1000);
  });
}

// Array of promises
const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

// Main execution
const startTime = performance.now();

// Call `showLoadingRow` before starting the promises
showLoadingRow();

Promise.all(promises).then((results) => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);

  // Clear the "Loading..." row
  output.innerHTML = "";

  // Add each resolved promise as a row
  results.forEach(({ promiseName, time }) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${promiseName}</td><td>${time}</td>`;
    output.appendChild(row);
  });

  // Add a row for the total time
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});












