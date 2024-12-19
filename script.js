const output = document.getElementById("output"); // Find the part of the table where rows will be added

// Step 1: Show a "Loading..." row in the table
const loadingRow = document.createElement("tr"); // Create a new row
loadingRow.innerHTML = `<td colspan="2">Loading...</td>`; // Add one cell spanning 2 columns with "Loading..."
output.appendChild(loadingRow); // Add this row to the table

// Step 2: Function to create a promise
function createPromise(promiseName) {
  return new Promise((resolve) => {
    const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds (e.g., 2.345 seconds)
    setTimeout(() => {
      resolve({ promiseName, time: parseFloat(time) }); // After the random time, return the name and time
    }, time * 1000); // Convert time to milliseconds for setTimeout
  });
}

// Step 3: Create 3 promises
const promises = [
  createPromise("Promise 1"), // First promise
  createPromise("Promise 2"), // Second promise
  createPromise("Promise 3"), // Third promise
];

// Step 4: Start measuring the total time
const startTime = performance.now(); // Record when the promises started

// Step 5: Wait for all promises to finish
Promise.all(promises).then((results) => {
  const endTime = performance.now(); // Record when all promises finished
  const totalTime = ((endTime - startTime) / 1000).toFixed(3); // Calculate total time in seconds

  // Step 6: Remove the "Loading..." row
  output.innerHTML = ""; // Clear the table

  // Step 7: Add rows for each resolved promise
  results.forEach(({ promiseName, time }) => {
    const row = document.createElement("tr"); // Create a new row
    row.innerHTML = `<td>${promiseName}</td><td>${time}</td>`; // Add promise name and time to the row
    output.appendChild(row); // Add the row to the table
  });

  // Step 8: Add a "Total" row
  const totalRow = document.createElement("tr"); // Create a new row
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`; // Add "Total" and total time
  output.appendChild(totalRow); // Add the row to the table
});














