const output = document.getElementById("output");

function showLoadingRow() {
  const loadingRow = document.createElement("tr");
  loadingRow.setAttribute("id", "loading");
  loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
  output.appendChild(loadingRow);
}

function createPromise(promiseName) {
  return new Promise((resolve) => {
    const time = (Math.random() * 2 + 1).toFixed(3);
    setTimeout(() => {
      resolve({ promiseName, time: parseFloat(time) });
    }, time * 1000);
  });
}

const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

const startTime = performance.now();

Promise.all(promises).then((results) => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);

  output.innerHTML = "";

  results.forEach(({ promiseName, time }) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${promiseName}</td><td>${time}</td>`;
    output.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});













